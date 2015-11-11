var React = require('react');

var MessageBox = React.createClass({

  render: function() {
    return (
      <input
        id="lobby-msg-box"
        className="form-control input-lg"
        autoComplete="off"
        maxLength="100"
        placeholder="ARIMA KOUSEI"
        rows="3"
        type="text"
      />
    )
  }

});

module.exports = MessageBox;
