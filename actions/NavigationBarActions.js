var alt = require('../alt');

class NavigationBarActions {

  transitioning(isTransitioning) {
    this.dispatch(isTransitioning);
  }
  
}

module.exports = alt.createActions(NavigationBarActions);
