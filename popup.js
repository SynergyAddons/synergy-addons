  let sourceclicked = document.getElementById('source');


sourceclicked.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };

if(document.getElementById("yes").checked == true) {
    chrome.storage.local.set({"enabled": true}, function() {
          console.log('Extension enabled');
        });
} else {
      chrome.storage.local.set({"enabled": false}, function() {
          console.log('Extension disabled');
        });
};



