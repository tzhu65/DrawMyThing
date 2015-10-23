var React = require('react');
var $ = jQuery;

var ChangePageActions = require('../../actions/ChangePageActions');

var HeaderAboutButton = React.createClass({

  openAboutPage: function() {
    ChangePageActions.transition('ABOUT');
  },

  render: function() {
    return (
      <div id="header-about-button" className="btn btn-default header-nav-bar-btn" onClick={this.openAboutPage}>
        <span className="glyphicon glyphicon-question-sign"></span>
      </div>
    )
  }
});

module.exports = HeaderAboutButton;
