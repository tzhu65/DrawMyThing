var React = require('react');

var UsernameSubmit = React.createClass({

  render: function() {

    var styles = {
      border: '1px solid white',
      color: 'white',
      background: 'transparent'
    };

    return (
      <input
        type="submit"
        className="btn btn-default"
        value={this.props.value}
        style={styles}
      />
    )
  }
});

module.exports = UsernameSubmit;
