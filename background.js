//todo open in bookmarks tab

chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.create({url: "opera://startpage/bookmarks"});  
	
	// if
	//chrome.tabs.update(tab.id, {url: "opera://startpage/bookmarks"});

});







