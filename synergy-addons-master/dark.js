var storage = chrome.storage.local;
storage.get('enabled', function(data) {
document.getElementById("LoginSVUE").style.color = 'white';
});
