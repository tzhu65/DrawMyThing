var socket = io();
var $ = jQuery;

$(document).ready(function(){

  // submit form while on same page
  var chat = $('#submit-game-chat');
  chat.submit(function(e) {
    e.preventDefault();
    var msg = $('#game-msg-box').val();
    if (msg === '') {
      return false;
    }
    var chatRoomId = $('#lobby-chat-room').attr('chatRoomId');

    socket.emit('message game-room', {username: USERNAME, msg: msg, roomId: chatRoomId});
    console.log('socket emitting: ' + msg);
    $('#game-msg-box').val('');
    return false;
  });

  socket.on('message game', function (data) {
    console.log('received a message');
    console.log(data);
    $('#game-msgs').append($('<span class="chat-message">').text(data.username + ': ' + data.msg));
    $('#game-msgs').append($('<br>'));
    $('#game-msgs').scrollTop($('#game-msgs')[0].scrollHeight);
    console.log('please scroll this shiz');
  });

});

var msgValidation = function(usrname) {
  var message = $('#user-form-msg');
  var errors = false;
  var submissionMessage = '';

  // check valid characters
  var letters = "^[\\sA-Za-z0-9_\\-\\.]+$";
  if(!usrname.match(letters)) {
    submissionMessage = 'Can only contain alpha-numeric characters';
    errors = true;
  }

  // check length
  if (usrname.length === 0) {
    submissionMessage = 'Must not be empty';
    errors = true;
  } else if (usrname.length > 20) {
    submissionMessage = 'Must be under 20 characters long';
    errors = true;
  }

  // fade messages
  if (errors) {
    if (message.css('opacity') !== 0) {
      message.animate({opacity: 0}, 1000, function() {
        message.text(submissionMessage);
        message.animate({opacity: 1}, 1000);
      });
    } else {
      message.text(submissionMessage);
      message.animate({opacity: 1}, 1000);
    }
    $('#submit-button').animate({opacity: 1}, 1000);
    return false;
  } else {

    // passed validation
    submissionMessage = 'Sending request...';
    if (message.css('opacity') !== 0) {
      message.animate({opacity: 0}, 1000, function() {
        message.text(submissionMessage);
        message.animate({opacity: 1}, 1000);
      });
    } else {
      message.text(submissionMessage);
      message.animate({opacity: 1}, 1000);
    }
    return true;
  }
};
