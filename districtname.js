chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
var name = document.getElementById('DistrictName');
name.setAttribute('style', 'color: #22bab0');
    };
