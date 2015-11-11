var React = require('react');
var socket = require('socket.io-client')();
var $ = jQuery;

var FormActions = require('../../../../actions/FormActions');

var SendMessageButton = React.createClass({

  componentDidMount: function() {
    var form = $('#create-room-form');
    form.submit(function(e) {
      FormActions.submitCreateRoomForm();
      e.preventDefault();
      return false;
    });
  },

  render: function() {
    return (
      <button id="lobby-send-msg-btn" type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button>
    )
  }
});

module.exports = SendMessageButton;
