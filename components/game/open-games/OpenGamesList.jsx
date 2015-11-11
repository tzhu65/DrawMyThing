var React = require('react');

var OpenGame = require('./OpenGame.jsx');

var GamePageActions = require('../../../actions/GamePageActions');
var ActiveGamesStore = require('../../../stores/ActiveGamesStore');

var OpenGamesList = React.createClass({

  getInitialState: function() {
    return ActiveGamesStore.getState();
  },

  componentDidMount: function() {
    ActiveGamesStore.listen(this.onChange);
    GamePageActions.updateRoomList();
  },

  componentWillUnmount: function() {
    ActiveGamesStore.unlisten(this.onChange);
  },

  onChange: function(state) {
    this.setState(state);
  },

  render: function() {

    return (
      <div id="open-game-list" className="container open-room-list" selectedKey="">
        <table id="open-game-table" className="table table-striped">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Size</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {this.state.activeRooms.map(function(room, i) {
              return <OpenGame room={room} key={i} keyValue={i}/>;
            })}
          </tbody>
          </table>
      </div>
    )
  }
});

module.exports = OpenGamesList;
