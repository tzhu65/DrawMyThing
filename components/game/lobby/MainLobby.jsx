var React = require('react');

var ChatRoom = require('./chatroom/ChatRoom.jsx');
var StartGameButton = require('./StartGameButton.jsx');

var MainLobby = React.createClass({

  render: function() {

    return (
      <div id="lobby-main">
        <ChatRoom />
        <StartGameButton />
      </div>
    )
  }
});

module.exports = MainLobby;
