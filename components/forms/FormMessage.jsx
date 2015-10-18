var React = require('react');
var $ = jQuery;

var FormMessage = React.createClass({

  render: function() {

    var onClickHide = function() {
      var message = document.getElementById('user-form-msg');
      $('#user-form-msg').animate({opacity: 0}, 1000);
    };

    var styles = {
      display: 'block',
      visibility: 'visible',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'white'
    };

    return (
      <div className="alert alert-warning" id="user-form-msg" style={styles} onClick={onClickHide}>
        &nbsp;
      </div>
    )
  }
});

module.exports = FormMessage;
