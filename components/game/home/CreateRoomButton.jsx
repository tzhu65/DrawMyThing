var React = require('react');
var ChangePageActions = require('../../../actions/ChangePageActions');


var CreateRoomButton = React.createClass({

  openNewRoomForm: function() {
    ChangePageActions.transition('ABOUT');
    console.log('wut wut');
  },

  render: function() {
    return (
      <div id="create-room-button" className="btn btn-default" onClick={this.openNewRoomForm}>
        <span className="glyphicon glyphicon-plus"></span>
      </div>
    )
  }
});



module.exports = CreateRoomButton;
