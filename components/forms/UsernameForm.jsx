var React = require('react');

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
        type="text"
        placeholder="Username"
        autoComplete="off"
        spellCheck="false"
        onKeyUp={this.onKeyUp}
      />
    )
  }
});

module.exports = UsernameForm;
