var React = require('react');

var ChatRoom = require('./chatroom/ChatRoom.jsx');
var DrawingBoard = require('./DrawingBoard.jsx');

var GameScreen = React.createClass({

  render: function() {

    return (
      <div id="game-screen">
        Hello World
        <div className="row">
          <div className="col-md-9">
            <DrawingBoard />
          </div>
          <div className="col-md-3">
            <ChatRoom />
          </div>
        </div>
      </div>
    )
  }

});

module.exports = GameScreen;
