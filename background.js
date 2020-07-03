chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: "opera://startpage/bookmarks"});
});