const mouseVisitedClassname = 'dom-node__mouse-visited';

let prevDOM = null; // Previous dom, that we want to track, so we can remove the previous styling.
let highlightedNode = null;

const domNodeCounter = (event) => {
  highlightedNode = event.srcElement;
  // var popup = document.getElementById('dom-node__container')
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  console.log(highlightedNode.getElementsByTagName('*'));
  // popup.style.top = mouseY;
  // popup.style.left = mouseX;
  if (highlightedNode) {
    if (prevDOM !== null) {
      prevDOM.classList.remove(mouseVisitedClassname);
    }
    highlightedNode.classList.add(mouseVisitedClassname);
    prevDOM = highlightedNode;
  }
}
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request);
    if (request.isEnabled) {
      document.addEventListener('mouseover', domNodeCounter);
    } else {
      highlightedNode.classList.remove(mouseVisitedClassname);
      document.removeEventListener('mouseover', domNodeCounter);
    }

    const handleMessage = (request, sender, sendResponse) => {
      console.log("Message from the content script: " +
        request);
      sendResponse({response: "Response from background script"});
    }
  });

// show a little box next to the mouse (top right) with DOM info. 