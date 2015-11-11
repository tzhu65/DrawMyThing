var React = require('react');
var $ = jQuery;

var RoomNameForm = React.createClass({

  onKeyUp: function(e) {
    console.log('validation goes here');
    var keynum = e.keyCode ? e.keyCode : e.which;
    if (keynum === 13) {
      $('#create-room-form').submit();
    }
  },

  render: function() {

    return (
      <div className="text-center">
        <label>{this.props.label}</label>
        <input
          id="room-name-input"
          className="form-control input-lg room-name-input"
          autoComplete="off"
          maxLength="32"
          onKeyUp={this.onKeyUp}
          spellCheck="false"
          type="text"
        />
      </div>
    )
  }
});

module.exports = RoomNameForm;
