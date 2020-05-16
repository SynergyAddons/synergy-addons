// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G, Johan N
var sourceclicked = document.getElementsByClassName("source")
var source = sourceclicked[0]
storage = chrome.storage.local
source.onclick = function (element) {
  chrome.windows.create({
    url: "https://github.com/gubareve/synergy-addons",
    type: "popup",
    focused: true,
  })
}

storage.get("enabled", function (data) {
  if (data.enabled == "y") {
    document.getElementById("checkbox-dark").checked = true
  } else {
    document.getElementById("checkbox-dark").checked = false
  }
})
storage.get("idenabled", function (data) {
  if (data.idenabled == "y") {
    document.getElementById("checkbox-id").checked = true
  } else {
    document.getElementById("checkbox-id").checked = false
  }
})

window.addEventListener("change", function () {
  var checked = document.getElementById("checkbox-dark").checked
  if (checked) {
    storage.set({ enabled: "y" }, function () {
      console.log("saved")
      chrome.tabs.reload()
    })
  } else {
    storage.set({ enabled: "n" }, function () {
      console.log("saved")
      chrome.tabs.reload()
    })
  }
})
window.addEventListener("change", function () {
  var checked = document.getElementById("checkbox-id").checked
  if (checked) {
    storage.set({ idenabled: "y" }, function () {
      console.log("saved")
      chrome.tabs.reload()
    })
  } else {
    storage.set({ idenabled: "n" }, function () {
      console.log("saved")
      chrome.tabs.reload()
    })
  }
})
