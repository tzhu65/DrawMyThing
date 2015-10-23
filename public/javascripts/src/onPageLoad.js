var $ = jQuery;

$(document).ready(function(){

  openComponents.push('header-about-button',
    'user-login-form'
  );

  // auto focus on the text input
  var userTextInput = $('#username-text-input');
  userTextInput.focus();
  userTextInput.select();

  // hide initial message
  var message = $('#user-form-msg');
  message.css('opacity', '0');

  // hide components that aren't on the landing page
  $('#header-return-button').css('display', 'none');
  $('#about-info-box').css('display', 'none');

});
