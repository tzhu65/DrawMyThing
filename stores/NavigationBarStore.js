var alt = require('../alt');
var NavigationBarActions = require('../actions/NavigationBarActions');

class NavigationBarStore {
  constructor() {
    this.isTransitioning = false;

    this.bindListeners({
      setIsTransitioning: NavigationBarActions.TRANSITIONING
    });
  }

  setIsTransitioning(isTransitioning) {
    this.isTransitioning = true;
  }
}

module.exports = alt.createStore(NavigationBarStore, 'NavigationBarStore');
