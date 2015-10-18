var React = require('react');

var UsernameSubmit = React.createClass({

  render: function() {

    return (
      <input
        type="submit"
        className="btn btn-default"
        value="Enter"
      />
    )
  }
});

module.exports = UsernameSubmit;
