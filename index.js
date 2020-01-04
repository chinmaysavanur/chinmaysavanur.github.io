const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

function toggleText(id) {
    var theText = document.getElementById(id);
  (theText.style.display=='block') ? theText.style.display='none' : theText.style.display='block' ;
}
