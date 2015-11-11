var React = require('react');

var HomePage = require('./home/HomePage.jsx');
var GameScreen = require('./ingame/GameScreen.jsx');

var DrawMyThingFrame = React.createClass({

  render: function() {
    return (
      <div id="dmt-frame">
        <p>
          Main Draw My Thing Frame Goes Here
        </p>
        <HomePage />
        <GameScreen />
      </div>
    )
  }
});

module.exports = DrawMyThingFrame;
