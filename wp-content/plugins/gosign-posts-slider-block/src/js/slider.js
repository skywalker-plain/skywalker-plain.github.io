jQuery(document).ready(function($) {
  var masnoryContainer = $(".grid-post-parent-gosign");
  masnoryContainer.each(function() {
    var sliderSettings = {
      dots: $(this).data("enabledots") ? $(this).data("enabledots") : false,
      infinite: $(this).data("infinite") ? $(this).data("infinite") : false,
      slidesToShow: $(this).data("slidestoshow") ? $(this).data("slidestoshow") : 1,
      slidesToScroll: $(this).data("slidestoscroll") ? $(this).data("slidestoscroll") : 1,
      fade: $(this).data("fadeanimation") ? $(this).data("fadeanimation") : false,
      autoplay:$(this).data("autoplay") ? $(this).data("autoplay") : false,
      speed: $(this).data("animationspeed") ? $(this).data("animationspeed") : 500,
      autoplaySpeed: $(this).data("autoplaydelay") ? $(this).data("autoplaydelay") : 500,
      initialSlide: $(this).data("initialslide") ? $(this).data("initialslide") : 0,
      lazyLoad: $(this).data("ladzloadslides") ? $(this).data("ladzloadslides") : false,
      adaptiveHeight: $(this).data("adaptiveheight") ? $(this).data("adaptiveheight") : false,
      pauseOnHover: $(this).data("pauseonhover") ? $(this).data("pauseonhover") : false,
      swipeToSlide: $(this).data("swipetoslide") ? $(this).data("swipetoslide") : false,
      vertical: $(this).data("verticalslider") ? $(this).data("verticalslider") : false,
      focusOnSelect: $(this).data("focusonselect") ? $(this).data("focusonselect") : false,
      // rtl: $(this).data("reverseslidescroll") ? $(this).data("reverseslidescroll") : false, //images are not showing due to some bug in js
      arrows: $(this).data("showarrows") ? $(this).data("showarrows") : false,
      variableWidth: $(this).data("variablewidth") ? $(this).data("variablewidth") : false,
      centerMode: $(this).data("centermode") ? $(this).data("centermode") : false,
      cssEase: $(this).data("cssease") ? $(this).data("cssease") : "linear" ,
      dotsClass: "slick-dots "+ ($(this).data("sliderdotsclass") ? $(this).data("sliderdotsclass") : ""),
    }
    if($(this).data("responsivesettings")){
      sliderSettings["responsive"] = [
        {
         breakpoint : 1024,
         settings: {
           slidesToShow: $(this).data("deskslidestoshow") ? $(this).data("deskslidestoshow") : 1,
           slidesToScroll: $(this).data("deskslidestoscroll") ? $(this).data("deskslidestoscroll") : 1,
           arrows: $(this).data("deskarrows") ? $(this).data("deskarrows") : false,
           dots: $(this).data("deskdots") ? $(this).data("deskdots") : false
         }
        },
        {
         breakpoint : 600,
         settings: {
           slidesToShow: $(this).data("tabslidestoshow") ? $(this).data("tabslidestoshow") : 1,
           slidesToScroll: $(this).data("tabslidestoscroll") ? $(this).data("tabslidestoscroll") : 1,
           arrows: $(this).data("tabarrows") ? $(this).data("tabarrows") : false,
           dots: $(this).data("tabdots") ? $(this).data("tabdots") : false
         }
        },
        {
         breakpoint : 480,
         settings: {
           slidesToShow: $(this).data("mobslidestoshow") ? $(this).data("mobslidestoshow") : 1,
           slidesToScroll: $(this).data("mobslidestoscroll") ? $(this).data("mobslidestoscroll") : 1,
           arrows: $(this).data("mobarrows") ? $(this).data("mobarrows") : false,
           dots: $(this).data("mobdots") ? $(this).data("mobdots") : false
         }
        }
      ]     
    }
    $(this).slick(sliderSettings);    
  });
});
