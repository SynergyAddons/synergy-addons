if(window.location.pathname == "/PXP2_Messages.aspx") {
	tr = document.getElementsByTagName('tr');
	for(i = 0; i < tr.length; i++) {
		tr[i].addEventListener('mouseover', function() {
			this.setAttribute('style', 'background-color: #808080')
		});
		tr[i].addEventListener('mouseleave', function() {
			this.setAttribute('style', 'background-color: #323232')
		});
	};
};
var content = document.getElementsByClassName("MessageContent");
for (i = 0; i < content.length; i++) {
content[i].setAttribute('style', 'background-color: #323232');
};
