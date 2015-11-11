var React = require('react');

var SubmitButton = React.createClass({

  render: function() {

    return (
      <input
        id="submit-button"
        className="btn btn-default form-submit-btn"
        type="submit"
        value={this.props.value}
      />
    )
  }
});

module.exports = SubmitButton;
