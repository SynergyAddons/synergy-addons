  let sourceclicked = document.getElementById('source');


sourceclicked.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };
var storage = chrome.storage.local;
storage.get('enabled', function(data) {
  if(typeof data.enabled == 'undefined' || data.enabled = 'y') {
    document.getElementById('checkbox').checked = true;
  } else {
    document.getElementById('checkbox').checked = false;
  };
};
  
function setEnabled() {
  var checked = this.checked;
  if(checked) {
        storage.set({'enabled':'y'},function(){
        console.log("saved");
      });
      
     } else {
       storage.set({'enabled':'n'},function(){
        console.log("saved");
      });
       
     };
};
  
