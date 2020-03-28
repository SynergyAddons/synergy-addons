// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G, Johan N
var storage = chrome.storage.local
storage.get("enabled", function (data) {
  if (window.location.pathname == "/PXP2_Messages.aspx") {
		var cssinj = document.createElement("style");
		var thecss = document.createTextNode(".MessageContent td {background-color: #323232 !important;} tbody tr:hover {background-color: #303030 !important;}");
		cssinj.appendChild(thecss);
		document.getElementsByTagName("head")[0].appendChild(cssinj);
  }
})
