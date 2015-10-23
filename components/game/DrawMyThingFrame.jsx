var React = require('react');

var HomePage = require('./home/HomePage.jsx');

var DrawMyThingFrame = React.createClass({

  render: function() {
    return (
      <div id="dmt-frame">
        <p>
          Main Draw My Thing Frame Goes Here
        </p>
        <HomePage />
      </div>
    )
  }
});

module.exports = DrawMyThingFrame;
