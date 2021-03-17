$(document).ready(function(){
  $('.promo__carousel').slick({
    prevArrow:'<button type="button" class="slick-prev"> <img src="../icons/arrows/left.png" alt=""> </button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="../icons/arrows/left.png" alt=""> </button>', 
    dots: true,
    appendDots:$('.promo__counter')
  });
});

$('.promo__carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
  let slide_num = currentSlide+1;
  if (slide_num < 10) { slide_num = '0' + slide_num; }
  $('.promo__counter-current').text(slide_num);
});

/*  service slider */

$(document).ready(function(){
  $('.carousel__service-wrapper').slick({
    prevArrow:'<button type="button" class="slick-prev"> <img src="../icons/arrows/right.png" alt=""> </button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="../icons/arrows/left.png" alt=""> </button>', 
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});


/* Suggest slider */

$(document).ready(function(){
  $('.carousel__suggest').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4
  });
});