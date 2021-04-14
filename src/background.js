chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    const extensionPagePath = chrome.runtime.getURL("index.html");
    const exentionsPageTab = tabs.find(({ url }) => url.startsWith(extensionPagePath));
    if (exentionsPageTab) {
      chrome.tabs.update(exentionsPageTab.id, { selected: true });
    } else {
      chrome.tabs.create({ url: extensionPagePath });
    }
  });
});
