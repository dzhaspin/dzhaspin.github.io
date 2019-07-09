$(function() {

    $('.main-slide').slick({
      infinite: true,
      fade: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "main-dots",
      prevArrow: '<div class="arrow arrow__prev"></div>',
      nextArrow: '<div class="arrow arrow__next"></div>',
    });

   // Magnific Popup
   $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  // $(".toggle").click(function () {
  //   $(this).closest("body").toggleClass("active");
  //   // $("#menu").slideToggle(); 
  // });
  $(".toggle").click(function() {
    $(this).toggleClass("active");
    $("#menu").slideToggle();
  });

  // Mail php
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(".success").addClass("visible");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $(".success").removeClass("visible");
        $.magnificPopup.close();
      }, 3500);
    });
    return false;
  });

  $("a.scroll").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

});
