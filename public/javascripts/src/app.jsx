var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('../../../components/HelloWorld.jsx');
var Locations = require('../../../components/Locations.jsx');
global.jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');

var $ = jQuery;

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('example')
);

ReactDOM.render(
  <Locations />,
  document.getElementById('example2')
);
