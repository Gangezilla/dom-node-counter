// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mouseover', function (event) {
  var srcElement = event.srcElement;
  var popup = document.getElementById('dom-node__container')
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  console.log(srcElement.getElementsByTagName('*'));
  popup.style.top = mouseY;
  popup.style.left = mouseX;

  // Lets check if our underlying element is a DIV.
  if (srcElement.nodeName == 'DIV') {
  // if (srcElement) {

    // For NPE checking, we check safely. We need to remove the class name
    // Since we will be styling the new one after.
    if (prevDOM !== null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }

    // Add a visited class name to the element. So we can style it.
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;
  }
}, false);

// 