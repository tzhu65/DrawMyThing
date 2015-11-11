var alt = require('../alt');
var $ = jQuery;

var GamePageActions = require('../actions/GamePageActions');

class ActiveGamesStore {
  constructor() {
    this.activeRooms = [];

    this.bindListeners({
      handleUpdateRoomList: GamePageActions.UPDATE_ROOM_LIST
    });
  }

  handleUpdateRoomList(rooms) {

    if (rooms === undefined) {
      rooms = [];
    }
    this.activeRooms = rooms;
  }
}

module.exports = alt.createStore(ActiveGamesStore, 'ActiveGamesStore');
