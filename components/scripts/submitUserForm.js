var $ = jQuery;
var ChangePageActions = require('../../actions/ChangePageActions');

$(document).ready(function(){

  // submit form while on same page
  var form = $('#user-login-form');
  form.submit(function(e) {
    e.preventDefault();
    var formAction = $(this).attr('action');
    var username = $('#username-text-input').val();
    var button = $('#submit-button');
    var message = $('#user-form-msg');
    button.animate({opacity: 0.25}, 1000);
    var valid = formValidation(username);
    if (valid) {
      var formData = {username: username};
      $.ajax({
        url: '/users',
        type: 'POST',     // try uppercase, 'post' !== 'POST', dont know if this must be uppercase or can be lowercase
        data: formData, // or try  $(this).serializeArray()
        success: function(html) {
          var submissionMessage;
          console.log(html);
          console.log(html.code);

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
      });
    }
    return false;
  });
});

var formValidation = function(usrname) {
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

module.exports = formValidation;
