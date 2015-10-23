
var pages = {};

pages.pageNames = [
  'LOGIN',
  'ABOUT',
  'GAME'
];

pages.pageComponents = {
  LOGIN: [
    'user-login-form',
    'header-about-button'
  ],
  ABOUT: [
    'about-info-box',
    'header-return-button'
  ],
  GAME: []
};

pages.previousPage = '';

module.exports = pages;
