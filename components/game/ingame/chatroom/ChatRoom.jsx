var React = require('react');

var GameMessages = require('./GameMessages.jsx');
var MessageBox = require('./MessageBox.jsx');
var SendMessageButton = require('./SendMessageButton.jsx');

var sendChat = require('./gameChatScripts.js');

var ChatRoom = React.createClass({

  render: function() {

    return (
      <div className="chat-box-container" id="game-chat-room" chatRoomId="">
        <GameMessages />
        <form id="submit-game-chat">
          <MessageBox />
        </form>
      </div>
    )
  }


});

module.exports = ChatRoom;
