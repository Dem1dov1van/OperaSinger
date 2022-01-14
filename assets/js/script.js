window.onload = () =>{
   console.log(123456);
   const navBtn = document.querySelector('.nav-toggle-btn')
   const menu = document.querySelector('.nav-list')
   const toggleMenu = () =>{
      console.log(123);
      menu.classList.toggle('open')
   }
   navBtn.addEventListener('click', toggleMenu)
}

new Swiper('.reviews__slider', {
   navigation:{
      nextEl: '.slider__next-btn',
      prevEl: '.slider__prev-btn'
   },
   pagination:{
      el:'.slider__pagination',
      type: 'fraction'
   },
})
// Плавный якорь

$(document).ready(function(){
   $("#menu").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
         top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1000);
   });
});

//  Руки Ренесанса
let plans = document.querySelector('#plans')
let rightHand = document.querySelector('.plans__right-hand') 
let leftHand = document.querySelector('.plans__left-hand') 
window.onscroll =() =>{
   if((($('#plans').offset().top) - 650) < (window.pageYOffset)){
   let left = window.pageYOffset * 0.01 - 45
   let right = window.pageYOffset * 0.01 - 45
   leftHand.style.left = left + "%";
   rightHand.style.right = right + "%";
   }
}

// faq
$(document).ready(function(){
   $('.faq__subtitle').click(function(event){
               // accardion mode
       if ($('.faq').hasClass('one')){
           $('.faq__subtitle').not($(this)).removeClass('active')
           $('.faq__text').not($(this).next()).slideUp(300)
       }
       $(this).toggleClass('active').next().slideToggle(300)
   })
})

// Кнопка наверх

$('#up').click(function() {
   $('html, body').animate({scrollTop: 0},500);
   return false;
})

// Кнопка серолл до формы

document.querySelector('.teacher__to-form-button').addEventListener('click', (event)=>{
   console.log('click');
   event.preventDefault();
   topSection = $('#contact').offset().top;
   console.log(topSection);
   $('body,html').animate({scrollTop: topSection}, 1000);
} )