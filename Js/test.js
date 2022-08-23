const postApi="http://localhost:3000/products"

fetch(postApi)
  .then(function (response) {
  return  response.json()
  })
 .then(function(posts){
  var htmls= posts.map(function(post){
        return `<div class="parent" >
        <div class="product-effect" style="display:flex">
           <img class="image" src="./Assets/img/SONY XBR.jpg" alt="">      
           <div class="flex">
               <p style="color: #929292;margin-top: 15px;">Apple</p>
               <div class="star">
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star star--active"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
                   <i class="fa-solid fa-star-half-stroke"></i>
               </div>
           </div>
           <div class="product-name">
               <a href="" class="product__name-link">${post.title}Sony XBR-55X900E 55-inch 4K HDR Ultra HD</a>
           </div>
           <div style="display: flex;">
               <p class="product-price">$78.80</p>
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
    document.querySelector('.product-tab').innerHTML=htmls.join('')
 })