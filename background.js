var isEnabled = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  var browser = browser || chrome;
  if (isEnabled) {
    isEnabled = false;
  } else {
    isEnabled = true;
  }

  const handleResponse = (res) => {
    console.log(res);
  }

  const handleError = (err) => {
    console.error(err);
  }

  const responseCallback = (value) => {
    console.log(value);
  }
  var request = { isEnabled };
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
      console.log('callback');
    });
  });
});