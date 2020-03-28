// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G

var storage = chrome.storage.local
storage.get("enabled", function (data) {
  if (data.enabled == "y") {
    var assessments = document.getElementsByClassName("ScheduleName")
    for (i = 0; i < assessments.length; i++) {
      assessments[i].setAttribute("style", "color: white;")
    }
    var cssinj = document.createElement("style")
    var thecss = document.createTextNode(
      ".text-center {color: #FFFFFF !important;}"
    )
    cssinj.appendChild(thecss)
    document.getElementsByTagName("head")[0].appendChild(cssinj)
  }
})
