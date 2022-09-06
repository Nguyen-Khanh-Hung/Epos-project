//alert("AAA");
const postApi="http://localhost:3000/products"

fetch(postApi)
  .then(function (response) {
  return  response.json()
  })
 .then(function(posts){
  var htmls= posts.map(function(post){
        return `<div class="item" >
        <div class="product-effect">
           <img class="image" src="${post.img}" alt="">   
           <div class="flex">
             <div> <p style="color: #929292;margin-top: 15px;">Apple</p> </div>
               <div class="star">
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
               </div>
           </div>
           <div class="product-name">
               <a href="" class="product__name-link">${post.title}</a>
           </div>
           <div style="display: flex;">
               <p class="product-price">${post.newPrice}</p>
               <span class="old-price" style="margin-left: 10px;text-decoration:line-through">$80.00</span>
               
           </div>
       </div>
           <label class="add-product">
               <a href=""><i class="fa-solid fa-cart-shopping"></i></a>  
               <a href=""><i class="fa-solid fa-heart"></i></a>   
                <a href=""><i class="fa-solid fa-list"></i></a> 
                <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  
             </label>
       </div>`
    })
    console.log(htmls);
    console.log(posts);
    document.querySelector('#product').innerHTML=htmls.join('');
    $('#product').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
 })

 const product_Api2=" http://localhost:3000/products-2"

 fetch(product_Api2)
   .then(function (response) {
   return  response.json()
   })
  .then(function(posts){
   var htmls= posts.map(function(post){
         return `<div class="item" >
         <div class="product-effect">
            <img class="image" src="${post.img}" alt="">   
            <div class="flex">
              <div> <p style="color: #929292;margin-top: 15px;">Apple</p> </div>
                <div class="star">
                    <i class="fa-solid fa-star star--active"></i>
                    <i class="fa-solid fa-star star--active"></i>
                    <i class="fa-solid fa-star star--active"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            <div class="product-name">
                <a href="" class="product__name-link">${post.title}</a>
            </div>
            <div style="display: flex;">
                <p class="product-price">${post.newPrice}</p>
                <span class="old-price" style="margin-left: 10px;text-decoration:line-through">$80.00</span>
                
            </div>
        </div>
            <label class="add-product">
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>  
                <a href=""><i class="fa-solid fa-heart"></i></a>   
                 <a href=""><i class="fa-solid fa-list"></i></a> 
                 <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>  
              </label>
        </div>`
     })
     console.log(htmls);
     console.log(posts);
     document.querySelector('#product-2').innerHTML=htmls.join('');
     $('#product-2').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:4
             }
         }
     })
  })
 


