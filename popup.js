// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var sourceclicked = document.getElementsByClassName('source');
var source = sourceclicked[0];

source.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };

var storage = chrome.storage.local;
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
	    chrome.tabs.create({url:"popup.html"});
document.getElementById('checkbox').checked = true;
        chrome.storage.local.set({
            'enabled': 'y'
        }, function() {});
    };
});

storage.get('enabled', function(data) {
    if (data.enabled == null) {
	document.getElementById('checkbox').checked = true;
        chrome.storage.local.set({
            'enabled': 'y'
        }, function() {});
    };
});

storage.get('enabled', function(data) {
  if(data.enabled == 'y') {
    document.getElementById('checkbox').checked = true;
  } else {
    document.getElementById('checkbox').checked = false;
  };
});
  
window.addEventListener('change', function (){
  var checked = document.getElementById('checkbox').checked;
  if(checked) {
        storage.set({'enabled':'y'},function(){
        console.log("saved");
	chrome.tabs.reload();
      });
      
     } else {
       storage.set({'enabled':'n'},function(){
        console.log("saved");
	chrome.tabs.reload()
      });
       
     };
});
