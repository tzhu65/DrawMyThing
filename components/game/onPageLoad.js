var $ = jQuery;

$(document).ready(function(){

  global.USERNAME = '';

  // make a popover
  $('#create-room-button').popover({
    html: true,
    animation: true,
    content: function() {
      return $('#create-room-form').html();
    },
    toggle: 'popover',
    placement: 'bottom',
    trigger: 'manual'
  });

  // focus form when popover shows
  $('#create-room-button').on('shown.bs.popover', function() {
    var roomNameInput = $('#room-name-input');
    roomNameInput.focus();
    roomNameInput.select();
  });

  // hide game components
  $('#lobby-main').css('display', 'none');
  $('#game-screen').css('display', 'none');

});
