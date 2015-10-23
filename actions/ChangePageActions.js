var alt = require('../alt');

class ChangePageActions {

  transition(pageName) {
    this.dispatch(pageName);
  }

}

module.exports = alt.createActions(ChangePageActions);
