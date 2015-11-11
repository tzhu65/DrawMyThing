var socket = io();
var $ = jQuery;

var canvasSetup = function() {

  var canvasjs = document.getElementById('drawing-canvas');
  var canvas = $('#drawing-canvas');
  var ctx = document.getElementById('drawing-canvas').getContext('2d');
  var offset;

  var resetCanvasSize = function() {
    var canvas = document.getElementById('drawing-canvas');
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;
    offset = $('#drawing-canvas').offset();
  }

  // initialize values
  resetCanvasSize();

  var lineWidth = 6;
  var isDrawing = false;
  ctx.lineWidth = lineWidth;

  // initialize the brush
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineCap = 'round';

  // draw when socket mousedown happens
  socket.on('mousedown', function (data) {
    drawCircle(data);
  });

  // draw when the drawer is moving their mouse
  socket.on('mousemove', function(data) {
    drawLine(data);
  });

  var setBrushSize = function(size) {
    ctx.lineWidth = size;
    lineWidth = size;
  };

  var getMousePos = function(e) {
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;
    console.log('x: ' + x + ', y: ' + y);
    return {x:x, y:y};
  };

  var drawCircle = function(data) {
    ctx.beginPath();
    var m = data.m;
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x+0.1, m.y+0.1);
    // ctx.arc(m.x, m.y, data.lineWidth/2.0 - 1, 0, 2 * Math.PI)
    ctx.stroke();
  };

  var drawLine = function(data) {
    var m = data.m;
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  };


  canvas.mousemove(function(e) {

    // draw stuff
    if (isDrawing) {

      // draw the line
      var m = getMousePos(e);
      drawLine({m: m});

      var msg = 'mouse position is: (' + m.x + ', ' + m.y + ')';
      console.log(msg);
      console.log('please draw this shiz');

      // emit mousemove
      var roomId = $('#lobby-chat-room').attr('chatRoomId');
      socket.emit('mousemove', {m: m, lineWidth: lineWidth, roomId: roomId})
    }
    e.preventDefault();
    return false;
  });

  canvas.mousedown(function(e) {

    // begin drawing
    isDrawing = true;

    // draw the circle
    console.log('clicked on the canvas...');
    var m = getMousePos(e);
    drawCircle({m: m, lineWidth: lineWidth})
    console.log('new mousedown');

    // emit mouseclick
    var roomId = $('#lobby-chat-room').attr('chatRoomId');
    socket.emit('mousedown', {m: m, lineWidth: lineWidth, roomId: roomId});

    e.preventDefault();
    return false;
  });

  $(document).mouseup(function(e) {

    // stop drawing
    console.log('mouseup on the document...');
    isDrawing = false;
    ctx.stroke();

    e.preventDefault();
    return false;
  });

  $(document).mouseleave(function(e) {

    // stop drawing
    console.log('mouse is leaving...');
    isDrawing = false;

    e.preventDefault();
    return false;
  })
};


module.exports = canvasSetup;
