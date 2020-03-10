// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var storage = chrome.storage.local;
storage.get('enabled', function(data) {
  if(data.enabled == 'undefined' || data.enabled == 'y') {
document.body.style.backgroundColor="#323232";
document.getElementById("maincontent").style.backgroundColor = "#333333";
document.getElementById("ep_StudentAssessments").style.color = "white";
document.getElementById("DistrictName").style.color = 'white';
document.getElementsByClassName("gb-student-assignments-grid")[0].style.color = 'black';
document.getElementById("gb-status").style.backgroundColor = 'white';
  };
});
