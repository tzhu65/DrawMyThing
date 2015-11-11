var React = require('react');
var $ = jQuery;

var FormMessage = require('./FormMessage.jsx');
var SubmitButton = require('./SubmitButton.jsx');
var UsernameForm = require('./UsernameForm.jsx');

var FormActions = require('../../actions/FormActions');
var FormStore = require('../../stores/FormStore');

var LoginForm = React.createClass({

  componentDidMount: function() {
    $('#user-login-form').submit(function(e) {
      e.preventDefault();
      FormActions.submitUserForm();
      return false;
    });
  },

  render: function() {
    return (
      <form id="user-login-form" className="form-group" action="" role="form">
        <UsernameForm />
        <SubmitButton value="Enter"/>
        <FormMessage />
      </form>
    )
  }
});

module.exports = LoginForm;
