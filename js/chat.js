var chatInput = document.getElementById('chat-input');
var submitBtn = document.querySelector('button.button.message-send');
var chatUser = document.querySelector('div.message-left.input-left > .avatar');

submitBtn.addEventListener('click', sendMessage);

function sendMessage() {
  console.log('message submited!');
  var messageBody = chatInput.value;
  var timeStamp = new Date();
  var userPhoto = chatUser.childNodes[1].src;
  var userName = chatUser.id;
  var messageObj;

  userPhoto = userPhoto.substr((userPhoto.lastIndexOf('/') + 1));

  messageObj = {
    userName: userName,
    userPhoto: userPhoto,
    timeStamp: timeStamp,
    body: messageBody
  };

  console.log(messageObj);

  return messageObj;

}
