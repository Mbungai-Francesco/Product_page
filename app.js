const cart = $('.count')
const operators = document.querySelectorAll('.add svg')

cart.click(function() {
  $('.cartDrop').toggleClass('hidden');
})

operators.forEach(element => {
  element.addEventListener('click',function (e){
    console.log(e.target)
  })
});