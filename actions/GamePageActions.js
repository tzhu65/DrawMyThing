var alt = require('../alt');
var $ = jQuery;
var socket = io();

class GamePageActions {

  createNewRoom(form) {
    this.dispatch(form);
  }

  changePage(pageName) {
    this.dispatch(pageName);
  }

  enterLobby(data) {
    // window.history.pushState("object or string", "Title", "/lobby/" + data.roomId);
    $('#lobby-chat-room').attr('chatRoomId', data.roomId)
    socket.emit('join room', {username: data.username, roomName: data.roomName, roomId: data.roomId});
    data.gamePage = 'LOBBY'
    this.dispatch(data);
  }

  startGame(data) {
    data.gamePage = 'GAME'
    var store = this;
    $.ajax({
      url: '/rooms/' + data.roomId + '/startGame',
      type: 'POST',
      success: function(html) {
        console.log(html);
        data.html = html;
        store.dispatch(data);
        console.log('heythere');
      },
      failure: function(html) {
        data.html = html;
        store.dispatch(data);
      }
    });
    store.dispatch(data);
  }

  updateRoomList() {
    var store = this;
    store.dispatch();
    $.ajax({
      url: '/rooms',
      type: 'GET',
      success: function(html) {
        store.dispatch(html.rooms);
      }
    });
  }
}

module.exports = alt.createActions(GamePageActions);
