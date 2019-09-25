document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("btn").addEventListener("click", function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {},
            function(msg) {
            document.getElementById("result").innerHTML = msg;
         });
      });
   });
});
