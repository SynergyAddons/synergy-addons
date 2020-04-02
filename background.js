// This file is subject to the terms and conditions defined in
// file 'LICENSE.txt', which is part of this source code package.
// (c) 2020 Rishi P, Evan G, Johan N
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: "welcome.html" }, function (data) {
    console.log(data)
  })
  chrome.storage.local.set(
    {
      enabled: "y",
      idenabled: "y",
    },
    function () {}
  )
})
