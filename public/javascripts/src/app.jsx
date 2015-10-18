var React = require('react');
var ReactDOM = require('react-dom');

global.jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');
var $ = jQuery;

var HelloWorld = require('../../../components/HelloWorld.jsx');
var Locations = require('../../../components/Locations.jsx');
var NewUserForm = require('../../../components/forms/NewUserForm.jsx');
var LoginForm = require('../../../components/forms/LoginForm.jsx');

ReactDOM.render(
  <LoginForm />,
  document.getElementById('new-usr-form')
);
