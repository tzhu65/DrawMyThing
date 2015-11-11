var React = require('react');
var $ = jQuery;

var GamePageActions = require('../../../actions/GamePageActions');

var OpenGame = React.createClass({

  onClick: function() {
    $('#open-game-list').attr('selectedKey', this.props.keyValue);
  },

  render: function() {

    return (

      <tr className="clickable-row" value={this.props.room.roomId} onClick={this.onClick}>
        <td>{this.props.room.roomName}</td>
        <td>{this.props.room.roomSize}</td>
        <td>{this.props.room.roomOwner}</td>
      </tr>
    )
  }
});

module.exports = OpenGame;
