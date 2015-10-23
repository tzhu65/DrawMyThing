var alt = require('../alt');

class GamePageActions {

  createNewRoom() {
    this.dispatch();
  }

}

module.exports = alt.createActions(GamePageActions);
