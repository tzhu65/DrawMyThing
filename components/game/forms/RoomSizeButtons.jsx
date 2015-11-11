var React = require('react');

var RoomSizeButtons = React.createClass({
  
  render: function() {

    return (
      <div className="text-center">
        <label>{this.props.label}</label>
        <div id="create-room-size" className="btn-group center" data-toggle="buttons">
          <label className="btn btn-primary">
            <input id="people4" autoComplete="off" name="options" type="radio" value="4" /> 4
          </label>
          <label className="btn btn-primary">
            <input id="people5" autoComplete="off" name="options" type="radio" value="5" /> 5
          </label>
          <label className="btn btn-primary">
            <input id="people6" autoComplete="off" name="options" type="radio" value="6" /> 6
          </label>
          <label className="btn btn-primary">
            <input id="people7" autoComplete="off" name="options" type="radio" value="7" /> 7
          </label>
          <label className="btn btn-primary">
            <input id="people8" autoComplete="off" name="options" type="radio" value="8" /> 8
          </label>
        </div>
      </div>
    )
  }
});

module.exports = RoomSizeButtons;
