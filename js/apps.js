

$(function () {
      $(window).on('load', function() {
        $('#preloader').fadeOut(2000);
      })


    $('.banner_slider').slick({
        arrows: false,
        autoplay: true,
        autoplayspeed: 600,
        speed:600,
        dots:true,
        dotsClass:'banner_slider_dots'
    })


    $('.deals_bottom_slider').slick({
      arrows: false,
      autoplay: true,
      autoplayspeed: 600,
      speed:600,
      dots:true,
      dotsClass:'banner_slider_dots'
  })



    $('.recent_product_slider').slick({
      slidesToShow:4,
      prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
      nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>',
    
 });


 $('#deals_coundown').countdown('2023/01/01', function(event) {
  var $this = $(this).html(event.strftime(
    "" + 
    "<div class='deals_countdown_item'><span>%D</span><span>Days</span></div> "+
    "<span class='separator'>:</span>" +
    "<div class='deals_countdown_item'><span>%H</span><span>Hours</span></div> "+ 
    "<span class='separator'>:</span>" +
    "<div class='deals_countdown_item'><span>%M</span><span>Minutes</span></div> "+ 
    "<span class='separator'>:</span>" +
    "<div class='deals_countdown_item'><span>%S</span><span>seconds</span></div>"
    ));
});

$(window).on("scroll", function () {
 var scrollSize = $(window).scrollTop()
 if (scrollSize > 100) {
  $('#backToTop').show(500)
 }else {
  $('#backToTop').hide(500)
 }
 
 if(scrollSize > 80) {
  $('#nav').addClass('active')
 }else {
  $('#nav').removeClass('active')
 }
});

$('#backToTop').on('click' , function () {
  $('html,body').animate({
    scrollTop:0
  })
})

});
