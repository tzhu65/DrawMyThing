var React = require('react');
var FormMessage = require('./FormMessage.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var UsernameSubmit = require('./UsernameSubmit.jsx');
var PasswordForm = require('./PasswordForm.jsx');
var submitUserForm = require('../scripts/submitUserForm');

var LoginForm = React.createClass({

  render: function() {
    return (
      <form className="form-group" id="new-user-form" action="">
        <UsernameForm />
        <PasswordForm />
        <UsernameSubmit value="Login"/>
        <FormMessage />
      </form>
    )
  }
});

module.exports = LoginForm;
