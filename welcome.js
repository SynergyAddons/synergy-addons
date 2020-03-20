chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://yoursite.com/"}, function (tab) {
        console.log("New tab launched with http://yoursite.com/");
    });
});
