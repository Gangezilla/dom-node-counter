let isEnabled = false;
chrome.browserAction.onClicked.addListener((tab) => {
  if (isEnabled) {
    isEnabled = false;
  } else {
    isEnabled = true;
  }
  
  const request = { isEnabled };
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    browser.tabs.sendMessage(tabs[0].id, request, (response) => {});
  });
});