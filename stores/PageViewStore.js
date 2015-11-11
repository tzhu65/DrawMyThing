var alt = require('../alt');
var ChangePageActions = require('../actions/ChangePageActions');
var pages = require('./scripts/pages');
var fade = require('./scripts/fade');
var async = require('async');

class PageViewStore {
  constructor() {
    this.isTransitioning = false;
    this.pages = pages;
    if (newUser) {
      pages.currentPage = 'LOGIN';
      pages.previousPage = 'LOGIN';
    } else {
      pages.currentPage = 'GAME';
      pages.previousPage = 'GAME';
    }

    this.bindListeners({
      transitionToNewPage: ChangePageActions.TRANSITION
    });
  }

  setIsTransitioning(isTransitioning) {
    this.isTransitioning = isTransitioning;
  }

  transitionToNewPage(pageName) {
    if (!this.isTransitioning) {
      this.isTransitioning = true;

      // TODO: refactor into one if then
      var showPage;
      if (pageName === 'ABOUT') {
        showPage = function() {
          fade.fadeInAndUnhideComponents(pages.pageComponents[pageName]);
        };
      } else if (pageName === 'LOGIN') {
        showPage = function() {
          fade.fadeInAndUnhideComponents(pages.pageComponents[pageName]);
        };
      } else if (pageName === 'GAME') {
        showPage = function() {
          fade.fadeInAndUnhideComponents(pages.pageComponents[pageName]);
        };
      } else if (pageName === 'PREVIOUS') {
        showPage = function() {
          fade.fadeInAndUnhideComponents(pages.pageComponents[pages.previousPage]);
        };
      } else {
        console.log('page name is undefined: ' + pageName);
      }

      var updatePagePointers = function() {
        if (pageName !== 'PREVIOUS') {
          pages.previousPage = pages.currentPage;
          pages.currentPage = pageName;
        } else {
          var tmp = pages.previousPage;
          pages.previousPage = pages.currentPage;
          pages.currentPage = tmp;
        }
      };

      var store = this;
      var finishTransition = function() {
        store.isTransitioning = false;
      };

      fade.fadeAndHideComponents(pages.pageComponents[pages.currentPage],
        [showPage, updatePagePointers, finishTransition]);
    }
  }
}

module.exports = alt.createStore(PageViewStore, 'PageViewStore');
