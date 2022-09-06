const Api="http://localhost:3000/products-2"

fetch(Api)
  .then(function (response) {
  return  response.json()
  })
 .then(function(posts){
  var htmls= posts.map(function(post){
        return ``
    })

    document.querySelector('.carousel-inner').innerHTML=htmls.join('')
 })




