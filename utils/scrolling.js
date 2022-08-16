export const disableScrolling = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
};

export const enableScrolling = () => {
  window.onscroll = function () {};
};
