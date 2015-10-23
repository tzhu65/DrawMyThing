var React = require('react');
var CreateGameButton = require('./CreateGameButton.jsx');

var HomePage = React.createClass({

  render: function() {

    return (
      <div id="home-page">
        <CreateGameButton />
      </div>
    )
  }
});

module.exports = HomePage;
