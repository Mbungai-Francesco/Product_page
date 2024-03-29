const cart = $('.count')
const notEmpty = $('.cartDrop .notEmpty')
const empty = $('.cartDrop .empty')
const addnum = $('.add b')
const num = $('.num')
const dropVal = $('#val')
const addToCart = $('.cart')
const amt = $('#amt')
const del = $('.dropMain svg')
const imgs = document.querySelectorAll('.imgs img')
const product = document.querySelector('#mainPic')
// console.log(product)
var items = 0
var current = 0

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click',function (e){
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('selected')
    }
    e.target.classList.add('selected')
    if(current != e.target.getAttribute('src').slice(23,24)){
      current = Number(e.target.getAttribute('src').slice(23,24))
      product.setAttribute('src',`./images/image-product-${current}.jpg`)
    }
  })
}

cart.click(function() {
  $('.cartDrop').toggleClass('hidden');
})
// $(document).click(function (){
//   if($('.cartDrop').contain('hidden')) $('.cartDrop').addClass('hidden');
// })

$('.add').click(function (e){
  var val = Number(e.target.getAttribute('value'))
  console.log(val);
  if(items >= 0){
    if(val == -1 && items ==0) {}
    else{
      items += val
      addnum.text(items);
    }
  }
})

addToCart.click(function (){
  if(items > 0){
    notEmpty.css('display','block')
    empty.css('display','none')
    num.text(items);
    dropVal.text(items);
    amt.text(`$${items*125}`);
  }
  else{
    num.text('');
    notEmpty.css('display','none')
    empty.css('display','block')
  }
})

del.click(function (){
  items = 0
  num.text('');
    notEmpty.css('display','none')
    empty.css('display','block')
})