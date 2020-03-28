chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: "welcome.html" }, function (data) {
    console.log(data)
  })
  chrome.storage.local.set(
    {
      enabled: "y",
      idenabled: "y"
    },
    function () {}
  )
})
