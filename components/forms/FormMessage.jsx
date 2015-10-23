var React = require('react');
var $ = jQuery;

var FormMessage = React.createClass({

  onClickHide: function() {
    var message = document.getElementById('user-form-msg');
    $('#user-form-msg').animate({opacity: 0}, 1000);
  },

  render: function() {

    return (
      <div className="alert alert-warning form-message" id="user-form-msg" onClick={this.onClickHide}>
        &nbsp;
      </div>
    )
  }
});

module.exports = FormMessage;
