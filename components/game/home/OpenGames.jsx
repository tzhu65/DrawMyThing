var React = require('react');

var CreateGameButton = React.createClass({

  render: function() {

    return (
      <input
        id="submit-button"
        type="submit"
        className="btn btn-default form-submit-btn"
        value="Create New Game"
      />
    )
  }
});

module.exports = CreateGameButton;
