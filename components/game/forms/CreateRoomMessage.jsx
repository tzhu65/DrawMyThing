var React = require('react');
var $ = jQuery;

var CreateRoomMessage = React.createClass({

  onClickHide: function() {
    var message = document.getElementById('create-room-msg');
    $('#create-room-msg').animate({opacity: 0}, 1000);
  },

  render: function() {

    return (
      <div id="create-room-msg" className="alert alert-warning form-message col-md-11" onClick={this.onClickHide}>
        &nbsp;Hello world
      </div>
    )
  }
});

module.exports = CreateRoomMessage;
