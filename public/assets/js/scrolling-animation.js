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
