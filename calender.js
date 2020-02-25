chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
document.getElementsByClassName("cal_tbl")[0].style.color = 'white';
document.getElementsByClassName("MessageContent")[0].style.backgroundcolor = '#333333';
    };
