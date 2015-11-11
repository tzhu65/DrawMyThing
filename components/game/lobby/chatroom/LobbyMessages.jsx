var React = require('react');
var $ = jQuery;

var LobbyMessages = React.createClass({

  render: function() {
    return (
      <div id="lobby-msgs" className="chat-box-area">
        Hi World!
      </div>
    )
  }
});

module.exports = LobbyMessages;
