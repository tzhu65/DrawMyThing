var React = require('react');

var CreateRoomButton = require('./CreateRoomButton.jsx');
var CreateRoomForm = require('../forms/CreateRoomForm.jsx');
var OpenGames = require('../open-games/OpenGamesList.jsx');
var MainLobby = require('../lobby/MainLobby.jsx');
var JoinRoomButton = require('./JoinRoomButton.jsx');

var onPageLoad = require('../onPageLoad');

var HomePage = React.createClass({

  render: function() {

    return (
      <div id="home-page">
        <CreateRoomButton />
        <CreateRoomForm />
        <OpenGames />
        <MainLobby />
        <JoinRoomButton />
      </div>
    )
  }
});

module.exports = HomePage;
