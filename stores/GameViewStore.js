var alt = require('../alt');
var GamePageActions = require('../actions/GamePageActions');
var gamePages = require('./scripts/gamePages');
var fade = require('./scripts/fade');
var async = require('async');
var drawingScripts = require('./scripts/drawingScripts');
var $ = jQuery;

class GameViewStore {
  constructor() {
    this.isTransitioning = false;
    this.gamePages = gamePages;
    gamePages.currentPage = 'MAIN'

    this.bindListeners({
      transitionToNewPage: GamePageActions.CHANGE_PAGE,
      transitionToLobby: GamePageActions.ENTER_LOBBY,
      transitionToGame: GamePageActions.START_GAME
    });
  }

  setIsTransitioning(isTransitioning) {
    this.isTransitioning = isTransitioning;
  }

  transitionToLobby(data) {
    this.transitionToNewPage(data.gamePage);
  }

  transitionToGame(data) {
    this.transitionToNewPage(data.gamePage);
  }

  setCanvas() {
    drawingScripts();
  }

  transitionToNewPage(pageName) {
    if (!this.isTransitioning) {
      var store = this;

      this.isTransitioning = true;

      // TODO: refactor into one if then
      var showPage;
      if (pageName === 'PREVIOUS') {
        showPage = function() {
          fade.fadeInAndUnhideComponents(gamePages.pageComponents[gamePages.previousPage]);
        };
      } else {
        var gameTransition;
        if (pageName === 'GAME') {
          gameTransition = store.setCanvas;
        }
        showPage = function() {
          fade.fadeInAndUnhideComponents(gamePages.pageComponents[pageName], undefined, gameTransition);
        };
      }

      var updatePagePointers = function() {
        if (pageName !== 'PREVIOUS') {
          gamePages.previousPage = gamePages.currentPage;
          gamePages.currentPage = pageName;
        } else {
          var tmp = gamePages.previousPage;
          gamePages.previousPage = gamePages.currentPage;
          gamePages.currentPage = tmp;
        }
      };

      var finishTransition = function() {
        store.isTransitioning = false;
      };

      fade.fadeAndHideComponents(gamePages.pageComponents[gamePages.currentPage],
        [showPage, updatePagePointers, finishTransition]);
    }
  }
}

module.exports = alt.createStore(GameViewStore, 'GameViewStore');
