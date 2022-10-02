// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseLeave: function () {
    h2.innerHTML = "mouse is Leave";
    h2Color();
  },
  mouseEnter: function () {
    h2.innerHTML = "Oh, mouse is here";
    h2Color();
  },
  lBtnClick: function () {
    h2.innerHTML = "You click me!";
    h2Color();
  },
  rBtnClick: function () {
    h2.innerHtml = "Right Click me!";
    h2Color();
  },
  auxClick: function () {
    h2.innerHTML = "Right button click!!";
    h2Color();
  },
  reSize: function () {
    h2.innerHTML = "You resize window!!!";
    h2Color();
  }
};

function h2Color() {
  const max = colors.length;
  h2.style.color = colors[Math.floor(Math.random() * max)];
}
//함수 표현식은 끌어올려지지 않으므로 주의해야함...
//즉 함수 선언 후 호출을 해야함.

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
h2.addEventListener("click", superEventHandler.lBtnClick);
h2.addEventListener("auxclick", superEventHandler.auxClick);
//window.addEventListener("contextmenu", superEventHandler.handleContext);
window.addEventListener("resize", superEventHandler.reSize);
