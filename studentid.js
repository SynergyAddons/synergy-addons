// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G
var storage = chrome.storage.local
storage.get("idenabled", function (data) {
  if (data.idenabled == "y") {
  var studentid = document.getElementsByClassName("student-id");
  studentid[0].style.visibility = "hidden"; //turns out apparently u need an array for class names :/ - RP
  var info = document.getElementsByClassName("info");
  info[0].style.visibility = "hidden"; //turns out apparently u need an array for class names :/ - RP
}})
