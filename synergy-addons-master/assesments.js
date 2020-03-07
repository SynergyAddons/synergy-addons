var storage = chrome.storage.local;
storage.get('enabled', function(data) {
var assesments = document.getElementsByClassName('ScheduleName');
for(i = 0; i < assesments.length; i++) {
  assements[i].setAttribute('style', 'color: "white"');
};
});
