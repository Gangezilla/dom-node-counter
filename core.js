// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'dom-node__mouse-visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

document.addEventListener('mouseover', function (event) {
  var srcElement = event.srcElement;
  // var popup = document.getElementById('dom-node__container')
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  console.log(srcElement.getElementsByTagName('*'));
  // popup.style.top = mouseY;
  // popup.style.left = mouseX;
  if (srcElement) {
    if (prevDOM !== null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
    prevDOM = srcElement;
  }
}, false);
