chrome.browserAction.onClicked.addListener(function(tab) {
  var browser = browser || chrome;
  var isEnabled = false;
  if (isEnabled) {
    isEnabled = false;
  } else {
    isEnabled = true;
  }
  
  // chrome.tabs.executeScript({
  //   // code: 'document.body.style.backgroundColor="red"'
  // });

  const handleResponse = (res) => {
    console.log(res);
  }

  const handleError = (err) => {
    console.error(err);
  }

  function responseCallback(value) {
    console.log(value);
  }
  var request = { isEnabled };
  
  // chrome.runtime.sendMessage({
  //   isEnabled,
  // }).then(handleResponse, handleError);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
      console.log('callback');
    })
  })
  
});

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });