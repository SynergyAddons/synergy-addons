var storage = chrome.storage.local;
storage.get('enabled', function(data) {
document.getElementsByClassName("gb-student-assignments-grid")[0].style.color = 'black';
document.getElementById("gb-status").style.backgroundColor = 'white';
});
