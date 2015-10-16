var React = require('react');
var LocationStore = require('../stores/LocationStore');
var LocationActions = require('../actions/LocationActions');

var Locations = React.createClass({
  getInitialState: function() {
    return LocationStore.getState();
  },

  componentDidMount: function() {
    LocationStore.listen(this.onChange);
    LocationActions.fetchLocations();
  },

  componentWillUnMount: function() {
    LocationStore.unlisten(this.onChange);
  },

  onChange: function(state) {
    this.setState(state);
  },

  handleClick: function() {
    LocationActions.fetchLocations();
  },

  render: function() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.locations.length) {
      return (
        <div>
          <img src="/my-cool-spinner.gif" />
        </div>
      )
    }
    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li onClick={this.handleClick}>hi {location.name}</li>
          );
        })}
      </ul>
    );
  }
})

module.exports = Locations;
