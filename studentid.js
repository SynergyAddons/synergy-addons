// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G, Johan N
var storage = chrome.storage.local
storage.get("enabled", function (data) {
  var studentid = document.getElementsByClassName("student-id")
  studentid[0].innerHTML = "[Student ID Hidden]"
  var info = document.getElementsByClassName("info")
  info[0].innerHTML = "[Student ID Hidden]"
})
