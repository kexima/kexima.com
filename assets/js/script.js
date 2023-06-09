$(document).ready(function () {
  "use strict";
  //Copyright Date
  // var newYear = document.getElementById("newYear");
  // newYear.innerHTML = new Date().getFullYear();
  
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top - 50,
        },
        1000
      );
    event.preventDefault();
    if (screen.width < 992) {
      $(".navbar-toggler").click();
    }
  });

  // AOS initialize
  AOS.init({
    disable: "mobile",
  });

  // Service Item Match Height
  $(".service-item").matchHeight({
    byRow: 0,
  });

  // .blog-content Match Height
  $(".blog-content").matchHeight({
    byRow: 0,
  });
  $(".story-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".quotes-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".clients-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // Magnific Gallery
  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});

// Add nav bg
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".main-nav").addClass("nav-bg");
  } else {
    $(".main-nav").removeClass("nav-bg");
  }
});

$(document).ready(function () {
  // 当页面滚动超过100px时，显示回到顶部按钮
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // 点击返回顶部按钮时，平滑滚动到页面顶部
  $('#back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
