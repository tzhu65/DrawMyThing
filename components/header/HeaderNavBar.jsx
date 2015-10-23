var React = require('react');
var $ = jQuery;

var HeaderAboutButton = require('./HeaderAboutButton.jsx');
var HeaderReturnButton = require('./HeaderReturnButton.jsx');

var PageViewStore = require('../../stores/PageViewStore');

var HeaderNavBar = React.createClass({

  render: function() {

    return (
      <div id="header-nav-bar" className="masthead clearfix header-nav-bar">
        <div className="inner">
          <nav>
            <ul className="nav masthead-nav">
              <HeaderAboutButton />
              <HeaderReturnButton />
            </ul>
          </nav>
        </div>
      </div>
    )
  }
});

module.exports = HeaderNavBar;
