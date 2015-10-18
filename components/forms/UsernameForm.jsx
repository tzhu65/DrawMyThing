var React = require('react');

var UsernameForm = React.createClass({

  render: function() {

    var onKeyUp = function(event) {
      var usrForm = document.getElementById('username-text-input');
      if (usrForm.value.length > 0) {
        usrForm.style.color = 'white';
      } else {
        usrForm.style.color = 'transparent';
      }
    };

    var divStyle = {
      backgroundColor: 'transparent',
      border: '0px solid white',
      textAlign: 'center',
      color: 'transparent',
      textShadow: '0 0 0 white',
      outline: 'none',
      WebkitAppearance: 'none'
    }

    return (
      <input
        id="username-text-input"
        className="form-control input-lg"
        type="text"
        placeholder="Username"
        autoComplete="off"
        spellCheck="false"
        onKeyUp={onKeyUp}
        style={divStyle}
      />
    )
  }
});

module.exports = UsernameForm;
