chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
   let inputCommentElementValue = document.getElementById('inputComment').value;
   displayComment(inputCommentElementValue);
   sendResponse(inputCommentElementValue);
})

function displayComment(msg) {
   let displayCommentElement = document.getElementById('inputData');
   displayCommentElement.value = msg;
   displayCommentElement.form.submit();
}
