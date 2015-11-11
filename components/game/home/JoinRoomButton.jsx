var React = require('react');
var $ = jQuery;

var GamePageActions = require('../../../actions/GamePageActions');

var JoinRoomButton = React.createClass({

  joinRoom: function() {

    var openGameList = $('#open-game-list');
    var key = parseInt(openGameList.attr('selectedKey')) + 1;
    var username = USERNAME;

    var cells = openGameList[0].getElementsByTagName('tr');
    var room = cells[key];
    var info = room.getElementsByTagName('td');
    var roomName = info[0].innerHTML;
    var roomId = room.getAttribute('value');

    console.log('entering the lobberino');
    console.log('user:' + username);
    console.log('roomName: ' + roomName);
    console.log('roomId: ' + roomId);

    GamePageActions.enterLobby({username: username, roomName: roomName, roomId: roomId});

  },

  render: function() {
    return (
      <div id="join-room-button"
           className="btn btn-default"
           onClick={this.joinRoom}>
        <span className="glyphicon glyphicon-log-in"></span>
        </div>
    )
  }
});


module.exports = JoinRoomButton;
