var gamePages = {};

gamePages.pageNames = [
  'MAIN',
  'LOBBY',
  'GAME'
];

// components to switch into
gamePages.pageComponents = {
  MAIN: [
    'create-room-form',
    'create-room-button',
    'open-game-list',
    'join-room-button'
  ],
  LOBBY: [
    'lobby-main'
  ],
  GAME: [
    'game-screen'
  ]
};

gamePages.currentPage = '';
gamePages.previousPage = '';

module.exports = gamePages;
