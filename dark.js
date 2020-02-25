chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
document.getElementById("LoginSVUE").style.color = 'white';
    };
