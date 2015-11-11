var React = require('react');
var $ = jQuery;

var CloseFormButton = require('./CloseFormButton.jsx');
var CreateRoomMessage = require('./CreateRoomMessage.jsx');
var CreateRoomRequestButton = require('./CreateRoomRequestButton.jsx');
var RoomNameForm = require('./RoomNameForm.jsx');
var RoomSizeButtons = require('./RoomSizeButtons.jsx');
var FormActions = require('../../../actions/FormActions');

var CreateRoomForm = React.createClass({

  componentDidMount: function() {
    $('#create-room-form').submit(function(e) {
      FormActions.submitCreateRoomForm();
      e.preventDefault();
      return false;
    });
  },

  render: function() {

    return (
      <form id="create-room-form" className="hide" action="" role="form">
        <CloseFormButton />
        <RoomNameForm label="Room Name"/>
        <br/>
        <RoomSizeButtons label="Number of Players"/>
        <hr/>
        <CreateRoomRequestButton />
      </form>
    )
  }
});

module.exports = CreateRoomForm;
