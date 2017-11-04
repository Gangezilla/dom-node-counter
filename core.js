var mouseVisitedClassname = 'dom-node__mouse-visited';

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
      prevDOM.classList.remove(mouseVisitedClassname);
    }
    srcElement.classList.add(mouseVisitedClassname);
    prevDOM = srcElement;
  }
}, false);

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
    request);
  sendResponse({response: "Response from background script"});
}

// chrome.runtime.onMessage.addListener(handleMessage);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request);
  });


// trigger only when the button gets clicked.
// work only on the tab where the button gets clicked.
// show a little box next to the mouse (top right) with DOM info. 