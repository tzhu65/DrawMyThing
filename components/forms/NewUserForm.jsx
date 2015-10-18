var React = require('react');
var FormMessage = require('./FormMessage.jsx');
var UsernameForm = require('./UsernameForm.jsx');
var UsernameSubmit = require('./UsernameSubmit.jsx');
var submitUserForm = require('../scripts/submitUserForm');

var NewUserform = React.createClass({

  render: function() {
    return (
      <form className="form-group" id="new-user-form" action="">
        <UsernameForm />
        <UsernameSubmit />
        <FormMessage />
      </form>
    )
  }
});

module.exports = NewUserform;
