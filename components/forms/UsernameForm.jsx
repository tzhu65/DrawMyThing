var React = require('react');
var $ = jQuery;

var UsernameForm = React.createClass({

  onKeyUp: function(event) {
    var usrForm = document.getElementById('username-text-input');
    if (usrForm.value.length > 0) {
      usrForm.style.color = 'white';
    } else {
      usrForm.style.color = 'transparent';
    }
  },

  render: function() {

    return (
      <input
        id="username-text-input"
        className="form-control input-lg form-usrname-input"
        autoComplete="off"
        maxLength="20"
        onKeyUp={this.onKeyUp}
        placeholder="Username"
        spellCheck="false"
        type="text"
      />
    )
  }
});

module.exports = UsernameForm;
