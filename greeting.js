chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
document.getElementById("Greeting").style.color = 'white';
    };
