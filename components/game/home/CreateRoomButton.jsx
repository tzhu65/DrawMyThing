var React = require('react');
var $ = jQuery;

var CreateRoomForm = require('../forms/CreateRoomForm.jsx');

var CreateRoomButton = React.createClass({

  openNewRoomForm: function() {
    $('#create-room-button').popover('toggle');
    document.onkeyup = function(e) {
      var keycode = e.keyCode ? e.keyCode : e.which;
      if (keycode === 27) {
        $('#create-room-button').popover('hide');
        document.onkeyup = null;
      }
    };
  },

  render: function() {
    return (
      <div id="create-room-button"
           className="btn btn-default"
           onClick={this.openNewRoomForm}>
        <span className="glyphicon glyphicon-plus"></span>
        </div>
    )
  }
});

// <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>



module.exports = CreateRoomButton;
