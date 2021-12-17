$(document).ready(function () {
  $(".carousel__main-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".thumbs__carousel-thumbs",
    mobileFirst: true,
    prevArrow: $(".carousel__btn-prev"),
    nextArrow: $(".carousel__btn-next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
        },
      },
    ],
  });
  $(".thumbs__carousel-thumbs").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".carousel__main-carousel",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });

  $(".thumbs__carousel-thumbs > .slick-list").removeClass("draggable");
});
