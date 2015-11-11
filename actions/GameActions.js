var alt = require('../alt');
var $ = jQuery;

class GameActions {

  sendChat(chat) {
    this.dispatch(chat);
  }
}

module.exports = alt.createActions(GameActions);
