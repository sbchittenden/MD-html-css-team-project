var chatInput = document.getElementById('chat-input');
var submitBtn = document.querySelector('button.button.message-send');
var chatUser = document.querySelector('div.message-left.input-left > .avatar');
var coversationPanel = document.querySelector('.conversation-wrapper');

// send message button listener
submitBtn.addEventListener('click', sendMessage);


function sendMessage() {
    console.log('message submited!');
    var messageBody = chatInput.value;
    var timeStamp = new Date();
    var userPhoto = chatUser.childNodes[1].src;
    var userName = chatUser.id;
    var messageObj;

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

    return messageObj;

}

// function to append the new message to the chat window
function appendMessage(m) {
  var conversation = document.querySelector('.conversation-wrapper');
  var messageWrap = document.querySelector('.message-right').cloneNode(true);
  messageWrap.querySelector('.right-bubble').innerHTML = '<span class="time-stamp">'+ m.timeStamp.toTimeString().substr(0,5) +'</span><h1>James Morrison</h1><p>'+ m.body +'</p>';
  conversation.appendChild(messageWrap);
}
