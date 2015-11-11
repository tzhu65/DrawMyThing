var React = require('react');

var FormMessage = React.createClass({

  render: function() {

    return (
      <div id="about-info-box" className="alert alert-info about-box">
        <p> In order to keep playing Draw My Thing, this website was made. </p>
        <p> No copyright is intended. </p>
      </div>
    )
  }
});

module.exports = FormMessage;
