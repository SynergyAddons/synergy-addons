// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var storage = chrome.storage.local;
storage.get('enabled', function(data) {
var assesments = document.getElementsByClassName('ScheduleName');
for(i = 0; i < assesments.length; i++) {
  assements[i].setAttribute('style', 'color: "white"');
}
});
