var React = require('react');
var $ = jQuery;

var FormMessage = React.createClass({

  render: function() {

    return (
      <div className="alert alert-info about-box" id="about-info-box">
        <p> In order to keep playing Draw My Thing, this website was made. </p>
        <p> No copyright is intended. </p>
      </div>
    )
  }
});

module.exports = FormMessage;
