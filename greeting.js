var storage = chrome.storage.local;
storage.get('enabled', function(data) {
document.getElementById("Greeting").style.color = 'white';
});
