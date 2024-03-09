//PRODUCT SLIDER JS
$(".product_slider").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  arrows: true,
  speed: 300,
  slidesToShow: 6,
  fade: true,
  nextArrow: ".next_product",
  prevArrow: ".previous_product",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//  HOW WORK SLIDER
$(".how_work_slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 400,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  nextArrow: ".left_arrow",
  prevArrow: ".right_arrow",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 526,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
// how-it-work-customize-left-margin
function handleMargin() {
  let marginLeft = document
    .getElementById("StepParent")
    .getBoundingClientRect().left;
  console.log(
    "starting",
    (document.getElementById(
      "StepElement"
    ).style.marginLeft = `${marginLeft}px`)
  );
}

addEventListener("load", () => {
  handleMargin();
  $(".how_work_slider").slick("refresh"); // Refresh the slider
});

window.addEventListener("resize", () => {
  handleMargin();
  $(".how_work_slider").slick("refresh"); // Refresh the slider
});

$(document).ready(function () {
  $(".testimonial_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 450,
    autoplay: false,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".next_caro",
    prevArrow: ".previous_caro",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1.85,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// testimonial-customize-left-margin
function handleMarginLeft() {
  let marginLeft = document
    .getElementById("parent")
    .getBoundingClientRect().left;
  console.log(
    "starting",
    (document.getElementById("heading").style.marginLeft = `${marginLeft}px`)
  );
}
addEventListener("load", (event) => {
  handleMarginLeft();
});
window.addEventListener("resize", () => {
  handleMarginLeft();
});

// SLIDER VIDEO SNIPPETS
$(document).ready(function () {
  $(".video_snippets_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".next_snipets",
    prevArrow: ".previous_snipets",
  });
});

// VIDEO SNIPPETS POPUP
function openPopup(videoId) {
  var youtubeIframe = document.getElementById("youtubeIframe");
  // Construct the YouTube embed URL with the video ID
  var youtubeUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  // Set the iframe source to the YouTube video URL
  youtubeIframe.src = youtubeUrl;
  popup.style.display = "flex"; //show popup
  document.getElementById("html_overflow").style.overflow = "hidden";
}
function closePopup() {
  var youtubeIframe = document.getElementById("youtubeIframe");
  // Stop the video and reset the iframe source
  youtubeIframe.src = "";
  popup.style.display = "none"; //Close popup
  document.getElementById("html_overflow").style.overflow = "visible";
}
// ========== BACK TO TOP
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      40
    );
    return false;
  });
});
