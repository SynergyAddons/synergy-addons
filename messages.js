// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var storage = chrome.storage.local;
storage.get('enabled', function(data) {
if(window.location.pathname == "/PXP2_Messages.aspx") {
	tr = document.getElementsByTagName('tr');
	for(i = 0; i < tr.length; i++) {
		tr[i].addEventListener('click', function() {
			document.querySelector('tr.MessageContent > td').style.backgroundColor ='#323232';
		});
		tr[i].addEventListener('mouseover', function() {
			this.setAttribute('style', 'background-color: #808080');
		});
		tr[i].addEventListener('mouseleave', function() {
			this.setAttribute('style', 'background-color: #323232');
		});
	}
  }
});
