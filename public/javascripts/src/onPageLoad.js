var $ = jQuery;
var ChangePageActions = require('../../../actions/ChangePageActions');

$(document).ready(function(){

  // hide components that aren't on the landing page
  if (newUser) {
    $('#dmt-frame').css('display', 'none');

    // auto focus on the text input
    var userTextInput = $('#username-text-input');
    userTextInput.focus();
    userTextInput.select();
  } else {

    // go directly into the game homepage
    $('#header-about-button').css('display', 'none');
    $('#about-info-box').css('display', 'none');
    $('#user-login-form').css('display', 'none');
  }

  $('#about-info-box').css('display', 'none');
  $('#header-return-button').css('display', 'none');

  // hide initial message
  $('#user-form-msg').css('opacity', '0');

});
