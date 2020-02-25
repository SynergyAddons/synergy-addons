chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
document.body.style.backgroundColor="#323232";
document.getElementById("maincontent").style.backgroundColor = "#333333";
document.getElementById("ep_StudentAssessments").style.color = "white";
document.getElementById("DistrictName").style.color = 'white';
document.getElementsByClassName("gb-student-assignments-grid")[0].style.color = 'black';
document.getElementById("gb-status").style.backgroundColor = 'white';
    };
