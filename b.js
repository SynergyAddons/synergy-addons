var messages = document.getElementsByClassName("UnreadMessages");
for (i = 0; i < messages.length; i++) {
messages[i].addEventListener("onmouseover", function(){
  messages[i].setAttribute('style', 'background-color: #A9A9A9');
});
};

var content = document.getElementsByClassName("MessageContent");
for (i = 0; i < content.length; i++) {
content[i].setAttribute('style', 'background-color: #808080');
};
