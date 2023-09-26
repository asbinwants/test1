$(function(){
  var swiper = new Swiper('.slide-3d ', {
     loop: true,
     centeredSlides: true,
     slideToClickedSlide: true,
     slidesPerView: "auto",
     effect: "coverflow",
     coverflowEffect: {
       rotate: 0,
       stretch: 100,
       depth: 230,
       //modifier: 1,
       slideShadows: false,
     },
     navigation: {//화살표 버튼
       nextEl: '.list3d .swiper-button-next',
       prevEl: '.list3d .swiper-button-prev',
     },
     pagination: {//블릿 버튼
       el: '.slide-3d .swiper-pagination',
       clickable: true,
     },
   });
 });