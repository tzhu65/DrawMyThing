var React = require('react');

var LobbyMessages = require('./LobbyMessages.jsx');
var MessageBox = require('./MessageBox.jsx');
var SendMessageButton = require('./SendMessageButton.jsx');

var sendChat = require('./chatScripts.js');

var ChatRoom = React.createClass({

  render: function() {

    return (
      <div className="chat-box-container" id="lobby-chat-room" chatRoomId="">
        <LobbyMessages />
        <form id="submit-lobby-chat">
          <MessageBox />
        </form>
      </div>
    )
  }


});

module.exports = ChatRoom;
