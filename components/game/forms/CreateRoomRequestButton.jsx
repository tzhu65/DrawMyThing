var React = require('react');
var $ = jQuery;

var CreateRoomRequestButton = React.createClass({

  submitForm: function(e) {
    $('#create-room-form').submit();
  },

  render: function() {

    return (
      <div className="text-center">
        <input
          id="create-room-request-button"
          className="btn btn-default form-create-room-input"
          onClick={this.submitForm}
          type="submit"
          value="Create"
        />
      </div>
    )
  }
});

module.exports = CreateRoomRequestButton;
