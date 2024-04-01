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
const imgs2 = document.querySelectorAll('.box .imgs img')
const product = document.querySelector('#mainPic')
const product2 = document.querySelector('#mainPic2')
const close = $('#close')
const light = $('.lightBox')
const changers = document.querySelectorAll('.changers')
const side = $('ul')
const menu = $('#menu')
// console.log(product)
var items = 0
var current = 1

const selected = () =>{
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('selected')
  }
  imgs[current-1].classList.add('selected')
  imgs2[current-1].classList.add('selected')
}

const replace = () =>{
  selected()
  product.setAttribute('src',`./images/image-product-${current}.jpg`)
  product2.setAttribute('src',`./images/image-product-${current}.jpg`)
}

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click',function (e){
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('selected')
    }
    e.target.classList.add('selected')
    if(current != e.target.getAttribute('src').slice(23,24)){
      current = Number(e.target.getAttribute('src').slice(23,24))
      replace()
    }
  })
}

cart.click(function() {
  const winWidth = window.innerWidth
  $('.cartDrop').toggleClass('hidden');
  // if( winWidth <= 500) $('.changers').toggleClass('hidden')
})

$('.operateBtns').click(function (e){
  console.log(e);
  var val = Number(e.currentTarget.getAttribute('value'))
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
  addnum.text(items);
  num.text('');
  notEmpty.css('display','none')
  empty.css('display','block')
})

product.addEventListener('click', function (){
  const winWidth = window.innerWidth
  if( winWidth > 500) {
    const bodyheight = document.querySelector('body').style.height;
    document.querySelector('.lightBox').style.height = bodyheight
    document.querySelector('.lightBox').classList.remove('hidden')
  }
})

close.click(function (){
  light.addClass('hidden')
})

for (let i = 0; i < changers.length; i++) {
  changers[i].addEventListener('click', function(e){
    let val = Number(e.target.getAttribute('value'))
    if(val == 1){
      if(current != 4) {
        current++
        replace()
      }
      else{
        current = 1
        replace()
      }
    }
    else{
      if(current != 1) {
        current--
        replace()
      }
      else{
        current = 4
        replace()
      }
    }
  })
}

menu.click(function (){
  const winWidth = window.innerWidth
  if( winWidth > 500) side.css('left','-3em')
  else{
    side.css('left','0em')
    $('.changers').css('display','none')
  }
})
$('ul svg').click(function (){
  const winWidth = window.innerWidth
  if( winWidth > 500) side.css('left','-13em')
  else{
    side.css('left','-10em')
    $('.changers').css('display','flex')
  }
})