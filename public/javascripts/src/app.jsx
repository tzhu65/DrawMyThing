var React = require('react');
var ReactDOM = require('react-dom');

global.jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');
var $ = jQuery;

var HelloWorld = require('../../../components/HelloWorld.jsx');
var Locations = require('../../../components/Locations.jsx');
var LoginForm = require('../../../components/forms/LoginForm.jsx');
var HeaderNavBar = require('../../../components/header/HeaderNavBar.jsx');
var RegistrationForm = require('../../../components/forms/RegistrationForm.jsx');


ReactDOM.render(
  <RegistrationForm />,
  document.getElementById('new-usr-form')
);

ReactDOM.render(
  <HeaderNavBar />,
  document.getElementById('header-nav-bar')
);
	