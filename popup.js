  let sourceclicked = document.getElementById('source');


sourceclicked.onclick = function(element) {
   chrome.windows.create({
  url: "https://github.com/gubareve/synergy-addons",
  type: "popup",
  focused: true
});
    
  };
var storage = chrome.storage.local;
function setEnabled() {
  var checked = this.checked;
  if(checked) {
        storage.set({'enabled':'y'},function(){
        console.log("saved");
      });
      
     } else {
       storage.set({'enabled':'cn'},function(){
        console.log("saved");
      });
       
     };
};
  
