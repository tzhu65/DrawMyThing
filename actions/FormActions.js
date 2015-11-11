var alt = require('../alt');
var ChangePageActions = require('./ChangePageActions');
var GamePageActions = require('./GamePageActions');
var $ = jQuery;
var socket = io();

class FormActions {

  transitioning(isTransitioning) {
    this.dispatch(isTransitioning);
  }

  submitUserForm() {
    var username = $('#username-text-input').val();
    var formData = {username: username};

    var valid = userFormValidation(username);
    if (valid) {
      var formAction = $(this).attr('action');
      var button = $('#submit-button');
      var message = $('#user-form-msg');
      $.ajax({
        url: '/users',
        type: 'POST',
        data: formData,
        success: function(html) {

          USERNAME = html.username;

          var submissionMessage;
          console.log(html);

          // fade the message
          if (html.code === '11') {
            submissionMessage = 'Name already taken...';
          } else {
            submissionMessage = 'It worked...';
            ChangePageActions.transition('GAME');
          }
          if (message.css('opacity') !== 0) {
            message.animate({opacity: 0}, 1000, function() {
              message.text(submissionMessage);
              message.animate({opacity: 1}, 1000);
            });
          } else {
            message.text(submissionMessage);
            message.animate({opacity: 1}, 1000);
          }

          // fade button
          button.animate({opacity: 1}, 1000);
        }
      })
    }
    this.dispatch(formData)
  }

  submitCreateRoomForm(form) {

    var roomName = $('#room-name-input').val();
    var roomSize = $('#create-room-size input:radio:checked').val();
    var formValues = {
      roomName: roomName,
      roomSize: roomSize
    };

    var valid = createRoomFormValidation(formValues);
    if (valid) {
      $.ajax({
        url: '/rooms',
        type: 'POST',
        data: formValues,
        success: function(html) {
          $('#create-room-button').popover('hide');
          $('#lobby-chat-room').attr('chatroomId', html.uniqueId);
          GamePageActions.enterLobby({username: USERNAME, roomName: html.roomName, roomId: html.uniqueId});
        }
      });
    } else {
      console.log('the form is incomplete');
    }
    return false;
  }

};

var userFormValidation = function(usrname) {
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

var createRoomFormValidation = function(formValues) {
  var roomName = formValues.roomName;
  var roomSize = formValues.roomSize;
  // var message = $('#user-form-msg');
  var errors = false;
  var submissionMessage = '';

  // check valid characters
  var letters = "^[\\sA-Za-z0-9_\\-\\.]+$";
  if(!roomName.match(letters)) {
    submissionMessage = 'Can only contain alpha-numeric characters';
    errors = true;
  }

  // check length
  if (roomName.length === 0) {
    submissionMessage = 'Must not be empty';
    errors = true;
  } else if (roomName.length > 20) {
    submissionMessage = 'Must be under 20 characters long';
    errors = true;
  }

  if (roomSize === undefined) {
    submissionMessage = 'Please select a room size';
    errors = true;
  }

  return !errors;
};

module.exports = alt.createActions(FormActions);
