var storage = chrome.storage.local;
storage.get('enabled', function(data) {
var name = document.getElementById('DistrictName');
name.setAttribute('style', 'color: #22bab0');
});

