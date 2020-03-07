var storage = chrome.storage.local;
storage.get('enabled', function(data) {
	document.getElementsByClassName("cal_tbl")[0].style.color = 'white';
	document.getElementsByClassName("MessageContent")[0].style.backgroundcolor = '#333333';
});