var React = require('react');
var ChangePageActions = require('../../../actions/ChangePageActions');


var CreateRoomButton = React.createClass({

  openNewRoomForm: function() {
    console.log('wut wut');
  },

  render: function() {
    return (
      <div id="create-room-button"
           className="btn btn-default"
           data-toggle="popover"
           title="Popover title"
           data-content="And here's some amazing content. It's very engaging. Right?"
           onClick={this.openNewRoomForm}>
        <span className="glyphicon glyphicon-plus"></span>
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
      </div>
    )
  }
});



module.exports = CreateRoomButton;
