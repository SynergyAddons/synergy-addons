// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var storage = chrome.storage.local
storage.get("enabled", function (data) {
  document.getElementById('ctl00_MainContent_LoginHeading').style.color = 'white';
})
