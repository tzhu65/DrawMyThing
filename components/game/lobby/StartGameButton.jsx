var React = require('react');
var $ = jQuery;

var GamePageActions = require('../../../actions/GamePageActions');

var StartGameButton = React.createClass({

  start: function(e) {
    GamePageActions.startGame({});
  },

  render: function() {
    return(
      <div id="start-game-button" className="btn btn-default" onClick={this.start}>
        <span className="glyphicon glyphicon-play"></span>
      </div>
    )
  }

});

module.exports = StartGameButton;
