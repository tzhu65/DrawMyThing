var React = require('react');
var ReactDOM = require('react-dom');

global.jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');
var $ = jQuery;


var LoginForm = require('../../../components/forms/LoginForm.jsx');
var HeaderNavBar = require('../../../components/header/HeaderNavBar.jsx');
var AboutInfo = require('../../../components/about/AboutInfo.jsx');
var DrawMyThingFrame = require('../../../components/game/DrawMyThingFrame.jsx');

var onPageLoad = require('./onPageLoad');
var stores = require('../../../stores/StoreImporter');


ReactDOM.render(
  <LoginForm />,
  document.getElementById('new-usr-form')
);

ReactDOM.render(
  <HeaderNavBar />,
  document.getElementById('header-nav-bar')
);

ReactDOM.render(
  <AboutInfo />,
  document.getElementById('about-info')
);

ReactDOM.render(
  <DrawMyThingFrame />,
  document.getElementById('draw-my-thing-main')
);
