var React = require('react');
var $ = jQuery;

var HeaderRegisterButton = React.createClass({

 render: function() {

    var styles = {
      border: '0px solid white',
      color: 'white',
      background: 'transparent'
    };

    return (
      <div id="header-register-button" className="btn btn-default" style={styles}>
        <span className="glyphicon glyphicon-log-in"></span>
      </div>
    )
  }
});

module.exports = HeaderRegisterButton;
