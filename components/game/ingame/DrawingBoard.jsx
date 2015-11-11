var React = require('react');
var $ = jQuery;

var DrawingBoard = React.createClass({

  render: function() {

    return (
      <div>
        <canvas id="drawing-canvas" className="canvas-drawing-board" />
      </div>
    )
  }
});

module.exports = DrawingBoard;
