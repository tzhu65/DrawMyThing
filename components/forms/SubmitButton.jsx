var React = require('react');

var SubmitButton = React.createClass({

  render: function() {

    return (
      <input
        id="submit-button"
        type="submit"
        className="btn btn-default form-submit-btn"
        value={this.props.value}
      />
    )
  }
});

module.exports = SubmitButton;
