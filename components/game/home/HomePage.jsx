var React = require('react');
var CreateRoomButton = require('./CreateRoomButton.jsx');
var CreateRoomForm = require('./CreateRoomForm.jsx');

var HomePage = React.createClass({



  render: function() {

    return (
      <div id="home-page">
        <CreateRoomButton />
        <CreateRoomForm />
      </div>
    )
  }
});

module.exports = HomePage;
