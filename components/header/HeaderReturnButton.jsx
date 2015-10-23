var React = require('react');
var $ = jQuery;

var ChangePageActions = require('../../actions/ChangePageActions');

var HeaderReturnButton = React.createClass({

  goBack: function() {
    ChangePageActions.transition('PREVIOUS');
  },

  render: function() {

    return (
      <div id="header-return-button" className="btn btn-default header-nav-bar-btn" onClick={this.goBack}>
        <span className="glyphicon glyphicon-chevron-left"></span>
      </div>
    )
  }
});

module.exports = HeaderReturnButton;
