// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.querySelector("h2");
text.addEventListener('mouseenter', onText);
text.addEventListener('mouseleave', outText);
function onText() {
  text.innerText = 'The mouse is here!';
  text.style.color = "#1abc9c";
}
function outText() {
  text.innerText = 'The mouse is gone!'
  text.style.color = "#9b59b6";
}
window.addEventListener('resize', changeText);
function changeText() {
  text.innerText = 'You just resized!!';
  text.style.color = "#e74c3c";
}
document.addEventListener('mousedown', (event) => {
  if(event.button === 2) {
    text.innerText = 'That was a right click~!';
    text.style.color = "#f39c12";
  }
})


// const superEventHandler = {
//   onText() {
//     text.innerText = "The mouse is here!";
//     text.style.color = colors[0];
//   },
//   outText() {
//     text.innerText = "The mouse is gone!";
//     text.style.color = colors[1];
//   },
//   resize() {
//     text.innerText = "You just resized!!";
//     text.style.color = colors[2];
//   },
//   rightMouse() {
//     if (event.button === 2) {
//       text.innerText = "That was a right click~!";
//       text.style.color = colors[3];
//     }
//   }
// };
// const text = document.querySelector("h2");
// text.addEventListener("mouseenter", superEventHandler.onText);
// text.addEventListener("mouseleave", superEventHandler.outText);
// window.addEventListener("resize", superEventHandler.resize);
// document.addEventListener("mousedown", superEventHandler.rightMouse);
