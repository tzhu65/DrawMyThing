var React = require('react');
var $ = jQuery;

var CloseFormButton = React.createClass({

  closeForm: function() {
    $('#create-room-button').popover('hide');
  },

  render: function() {

    return (

      <div>
        <div id="close-form-button" className="btn btn-default close-room-create col-md-1" onClick={this.closeForm}>
          <span className="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    )
  }
});

module.exports = CloseFormButton;
