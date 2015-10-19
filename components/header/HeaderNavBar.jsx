var React = require('react');
var HeaderRegisterButton = require('./HeaderRegisterButton.jsx');
var $ = jQuery;

var HeaderNavBar = React.createClass({

  render: function() {

    var styles = {
      position: 'absolute',
      right: '0px'
    }

    return (
      <div className="masthead clearfix" style={styles}>
        <div className="inner">
          <nav>
            <ul className="nav masthead-nav">
              <HeaderRegisterButton value="Register" />
            </ul>
          </nav>
        </div>
      </div>
    )
  }
});

module.exports = HeaderNavBar;
