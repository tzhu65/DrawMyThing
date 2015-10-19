var React = require('react');

var SubmitButton = React.createClass({

  render: function() {

    var styles = {
      border: '1px solid white',
      color: 'white',
      background: 'transparent',
      WebkitAppearance: 'none'
    };

    return (
      <input
        id="submit-button"
        type="submit"
        className="btn btn-default"
        value={this.props.value}
        style={styles}
      />
    )
  }
});

module.exports = SubmitButton;
