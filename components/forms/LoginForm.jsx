var React = require('react');
var FormMessage = require('./FormMessage.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var SubmitButton = require('./SubmitButton.jsx');
var submitUserForm = require('../scripts/submitUserForm');

var LoginForm = React.createClass({

  render: function() {
    return (
      <form className="form-group" id="user-login-form" action="">
        <UsernameForm />
        <SubmitButton value="Enter"/>
        <FormMessage />
      </form>
    )
  }
});

module.exports = LoginForm;
