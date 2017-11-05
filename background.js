var isEnabled = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  var browser = browser || chrome;
  if (isEnabled) {
    isEnabled = false;
  } else {
    isEnabled = true;
  }
  
  var request = { isEnabled };
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
      console.log('callback');
    });
  });
});

// var elem = document.getElementById("myDiv");
// elem.parentNode.removeChild(elem);