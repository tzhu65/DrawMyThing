var React = require('react');

var PasswordForm = React.createClass({

  render: function() {

    var placeHolder = "*";

    var removePlaceHolder = function(event) {
      var passwordForm = document.getElementById('password-text-input');
      passwordForm.placeholder = "";
    }

    var addPlaceHolder = function(event) {
      var passwordForm = document.getElementById('password-text-input');
      passwordForm.placeholder = placeHolder;
    }

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
        id="password-text-input"
        className="form-control input-lg"
        type="password"
        autoComplete="off"
        spellCheck="false"
        placeholder={placeHolder}
        onFocus={removePlaceHolder}
        onBlur={addPlaceHolder}
        style={divStyle}
      />
    )
  }
});

module.exports = PasswordForm;
