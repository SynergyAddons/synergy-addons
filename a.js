chrome.storage.local.get(['enabled'], function(data) {
    if (data.enabled) {
        document.getElementsByClassName("gb-student-assignments-grid")[0].style.color = 'black';
document.getElementById("gb-status").style.backgroundColor = 'white';
    };
        });
    

