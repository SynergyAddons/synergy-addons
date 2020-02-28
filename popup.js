  let sourceclicked = document.getElementById('source');


sourceclicked.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };
   chrome.storage.local.set({'enabled': "true"}, function(data) {
        });
document.getElementById("yes").onclick = function() {
   chrome.storage.local.set({'enabled': "true"}, function(data) {
     console.log('Extension enabled');
        });
}
document.getElementById("no").onclick = function() {
   chrome.storage.local.set({'enabled': "false"}, function(data) {
            console.log('Extension disabled');
        });
}
document.getElementById("e").onclick = function() {
   chrome.storage.local.set({'enabled: true}, function(data) {
     console.log('Extension enabled');
        });
}
document.getElementById("no-e").onclick = function(data) {
   chrome.storage.local.set({'enabled': "false"}, function() {
            console.log('Extension disabled');
        });
}



