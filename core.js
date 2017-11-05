const mouseVisitedClassname = 'dom-node__mouse-visited';

let prevDOM = null; // Previous dom, that we want to track, so we can remove the previous styling.
let highlightedNode = null;

const domNodeCounter = (event) => {
  highlightedNode = event.srcElement;
  document.body.style.position = 'relative';
  const popup = document.getElementById('dom-node__popup');
  let mouseY = event.pageY;
  popup.style.top = `${mouseY+10}px`;
  let mouseX = event.pageX;
  popup.style.left = `${mouseX+10}px`;
  let domNodes = highlightedNode.getElementsByTagName('*');
  let totalDomNodes = domNodes.length;
  console.log(domNodes);
  popup.innerHTML=`<span>DOM Nodes: ${totalDomNodes}</span></br><span>Check your console to see all DOM Nodes.</span>`
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
    const popupElement = document.createElement('div');
    popupElement.id = 'dom-node__popup';
    if (request.isEnabled) {
      document.body.appendChild(popupElement);
      document.body.appendChild(popupElement);
      document.addEventListener('mouseover', domNodeCounter);
    } else {
      // remove popupElement in here. list.removeChild(list.childNodes[0]); 
      // popupElement.removeChild(popupElement.childNodes[0])
      document.getElementById('dom-node__popup').remove();
      highlightedNode.classList.remove(mouseVisitedClassname);
      document.removeEventListener('mouseover', domNodeCounter);
    }
  });

  // get better at drilling down into nested structure somehow...
  // remove element once it's been created.
  // styling
  // icon
  // on/off over iconwhen its on/off.