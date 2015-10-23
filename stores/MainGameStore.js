var alt = require('../alt');
var GamePageActions = require('../actions/GamePageActions');

class MainGameStore {
  constructor() {
    this.isTransitioning = false;

    this.bindListeners({
      makeRoom: GamePageActions.CREATE_NEW_ROOM
    });
  }

  makeRoom(room) {
    console.log('room info:');
    console.log(room);
  }
}

module.exports = alt.createStore(MainGameStore, 'MainGameStore');
