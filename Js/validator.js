// Đối tượng đơn giản nhận được đối số từ hàm tạo bên html
function Validator(options){

    // Hàm thực hiện validate
    function validate(inputElement,rule){
        var errorElement=inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage=rule.test(inputElement.value)
        // Hàm test bên dưới nó sẽ kiểm tra xem là người dùng nhập đúng chưa
        // Nếu mà lỗi thì trả về Vui lòng..., thì là có error message
        // thì in ra là vui lòng..., còn không thì rỗng
        // nó tồn tại được khi mà nó lỗi==vui lòng...,
        if(errorMessage){
            errorElement.innerText=errorMessage
        }
        else{
            errorElement.innerText=''
        }
    }
    var formElement=document.querySelector(options.form)
    options.rules.forEach(rule=> {
        var inputElement=formElement.querySelector(rule.selector)
        // Nếu mà đúng là có 2 ô này thì kiểm tra, giá trị trong mỗi ô input
        if(inputElement){
        var errorElement=inputElement.parentElement.querySelector(options.errorSelector)
            // dùng để kiểm tra khi người dùng blur ra ngoài
            inputElement.onblur=function(){
                validate(inputElement,rule)
                document.querySelector('#form-signup #signUp-password').value
            }
            inputElement.oninput=function(){
                errorElement.innerHTML=''
            }
        }
    });  
}

// định nghĩa ra các rules
Validator.isRequired=function(selector){
    return{
        selector,
        test:function(value){
            return value.trim()?undefined:"Vui lòng nhập trường này"
        }
    }
}

Validator.isEmail=function(selector){
   return{
    selector,
    test:function(value){
        var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value)?undefined:"Trường này không phải email"
    }
    }
}

Validator.isPassword=function(selector,min){
    return{
     selector,
     test:function(value){
         return value.length>=min?undefined:`Vui lòng nhập tối thiểu ${min} ký tự`
     }
     }
}
Validator.isRepeatPassword=function(selector,confirmPassword){
    return{
     selector,
     test:function(value){
         return value===confirmPassword()?undefined:`Giá trị nhập vào không chính xác`
     }
     }
}
