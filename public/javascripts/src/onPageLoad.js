var $ = jQuery;
var ChangePageActions = require('../../../actions/ChangePageActions');

$(document).ready(function(){

  // hide initial message
  $('#user-form-msg').css('opacity', '0');

  // hide components that aren't on the landing page
  if (newUser) {
    $('#header-return-button').css('display', 'none');
    $('#about-info-box').css('display', 'none');
    $('#dmt-frame').css('display', 'none');

    // auto focus on the text input
    var userTextInput = $('#username-text-input');
    console.log('please work');
    userTextInput.focus();
    userTextInput.select();
  } else {
    $('#header-about-button').css('display', 'none');
    $('#header-return-button').css('display', 'none');
    $('#about-info-box').css('display', 'none');
    $('#user-login-form').css('display', 'none');
    $('#dmt-frame').css('display', 'none');

    // go directly into the game homepage
    ChangePageActions.transition('GAME');
  }

});
