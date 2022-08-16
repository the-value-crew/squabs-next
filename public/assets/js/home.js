// Initial Video Code

let videoWrapper = document.querySelector(".video-wrapper");
let video = document.querySelector("video");

// Initially disable scrolling
disableScrolling();

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

// Enable scrolling when video ends
video.addEventListener(
  "ended",
  function () {
    video.style.display = "none";
    videoWrapper.style.display = "none";
    enableScrolling();
  },
  false
);

// Scrolling animation

let squabsLogo = document.querySelector(".hero-logo");
let foreground = document.querySelector(".hero-background");
let canvas = document.querySelector(".canvas");

let initialCanvasLeft = canvas.offsetLeft;

let oldValue = 0;
let newValue = 0;

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  let initialStartValuePercent = 0;
  let scrollBottomLimit = 40;

  if (window.screen.width < 640) {
    initialStartValuePercent = 40;
    scrollBottomLimit = 500;
  }

  if (value * 0.05 <= scrollBottomLimit) {
    squabsLogo.style.top = value * 0.05 + initialStartValuePercent + "%";
  }
  foreground.style.top = value * 1 + "px";
});
