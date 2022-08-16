// XỬ LÝ MENU RESPONSIVE
function showMenu(){
    ELEMENT_OVERLAY.classList.toggle("active")
    ELEMENT_MODAL_MENU.classList.add("active")
}
function hideOverlay(){
    ELEMENT_OVERLAY.classList.remove("active")
    ELEMENT_MODAL_MENU.classList.remove("active")
    ELEMENT_MENU_SETTINGS.classList.remove("active");
    ELEMENT_SETTINGS_BTN_RED.classList.remove("active");
    ELEMENT_MODAL_FORM_LOG.classList.remove("active");
}
function closeMenu(){
    ELEMENT_MODAL_MENU.classList.remove("active")
    ELEMENT_OVERLAY.classList.remove("active")
}
// XỬ LÝ TAB PRODUCT
ELEMENT_BTN_TAB.forEach((tab, index) => {
    tab.onclick = function (e) {
        const product=ELEMENT_PRODUCT_TABS[index]
        document.querySelector('.btn-tab.active').classList.remove('active');
        document.querySelector('.product-tab.active').classList.remove('active');
        product.classList.add('active');
        console.log(product);
        this.classList.add('active');
        e.preventDefault();
    };
  });

//   XỬ LÝ MODAL SETTINGS

function showSettings() {
    ELEMENT_MENU_SETTINGS.classList.toggle("active");
    ELEMENT_OVERLAY.classList.toggle("active")
    ELEMENT_SETTINGS_BTN_RED.classList.toggle("active");
    
}

// XỬ LÝ MODAL LOGIN

function transformLogin(){
    ELEMENT_LOGIN.style.display = "block";
    ELEMENT_TRANSFORM_LOGIN.style.color = "red";
    ELEMENT_SIGNUP.style.display = "none";
    ELEMENT_TRANSFORM_SIGNUP.style.color = "var(--text-color)";
}
function transformSignup(){
    ELEMENT_LOGIN.style.display = "none";
    ELEMENT_SIGNUP.style.display = "block";
    ELEMENT_TRANSFORM_SIGNUP.style.color = "red";
    ELEMENT_TRANSFORM_LOGIN.style.color = "var(--text-color)";
}

function showLog(){
    ELEMENT_MODAL_FORM_LOG.classList.add('active');
    ELEMENT_MENU_SETTINGS.classList.toggle("active");
    ELEMENT_TRANSFORM_LOGIN.style.color = "red";
  
}
function closeForm(){
    ELEMENT_MODAL_FORM_LOG.classList.remove('active');
    ELEMENT_OVERLAY.classList.remove("active")
    ELEMENT_SETTINGS_BTN_RED.classList.remove("active")
    ELEMENT_LOGIN.style.display = "block";
    ELEMENT_SIGNUP.style.display = "none";
    ELEMENT_TRANSFORM_SIGNUP.style.color = "var(--text-color)";
}