const BODY = document.querySelector("body");
function changeColor() {
  if(window.innerWidth > 1200) {
    BODY.style.backgroundColor = "#1abc9c";
  } else if (window.innerWidth <= 1200 && window.innerWidth > 900) {
    BODY.style.backgroundColor = "#3498db";
  } else if (window.innerWidth <= 900 && window.innerWidth > 500) {
    BODY.style.backgroundColor = "#9b59b6";
  } else {
    BODY.style.backgroundColor = "#f39c12";
  }
}

window.addEventListener('resize', changeColor);