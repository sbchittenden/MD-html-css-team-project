var chatInput = document.getElementById('chat-input');
var submitBtn = document.querySelector('button.button.message-send');
var chatUser = document.querySelector('div.message-left.input-left > .avatar');
var coversationPanel = document.querySelector('.conversation-wrapper');

// send message button listener
submitBtn.addEventListener('click', sendMessage);
var errorMessage = document.getElementById('error-message');


function sendMessage() {
  console.log('message submited!');
  var messageBody = chatInput.value;
  var timeStamp = new Date();
  var userPhoto = chatUser.childNodes[1].src;
  var userName = chatUser.id;
  var messageObj;

  if (isEmpty(messageBody)) {
    errorMessage.innerHTML = 'Please enter a valid message';
    errorMessage.className = 'invalid';
    return;
  } else {
    errorMessage.className = 'valid';
    errorMessage.innerHTML = '';
  }

  if (isOfLength(messageBody, 100)) {
    errorMessage.innerHTML = 'Your message cannot be longer than 100 characters';
    errorMessage.className = 'invalid';
    return;
  } else {
    errorMessage.className = 'valid';
    errorMessage.innerHTML = '';
  }

  userPhoto = userPhoto.substr((userPhoto.lastIndexOf('/') + 1));

  // create the messageObj
  messageObj = {
    id: collabAppData.chatPanel.messageList.length + 1,
    userName: userName,
    userPhoto: userPhoto,
    timeStamp: timeStamp,
    body: messageBody
  };

  // add the new message object to the messageList array in appData object
  collabAppData.chatPanel.messageList.push(messageObj);

  // log messageObj to the console
  console.log(messageObj);

  // append new message to the chat window
  appendMessage(messageObj);

  // reset chat input
  chatInput.value = "";

  return messageObj;

}

//Checks the `input` parameter and returns true if it is an empty string–a string with no length or characters that is represented as `""` or only contains whitespace(s).
function isEmpty(input) {
  if (typeof input !== "string") {
    return false;
  } else if (input.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

//Checks if the `input` parameter’s character count is greater than or equal to the `n` parameter.
function isOfLength(input, n) {
  return input.length > n;
}

// function to append the new message to the chat window
function appendMessage(m) {
  var conversation = document.querySelector('.conversation-wrapper');
  var messageWrap = document.querySelector('.message-right').cloneNode(true);
  messageWrap.querySelector('.right-bubble').innerHTML = '<span class="time-stamp">' + m.timeStamp.toTimeString().substr(0, 5) + '</span><h1>James Morrison</h1><p>' + m.body + '</p>';
  conversation.appendChild(messageWrap);
}

