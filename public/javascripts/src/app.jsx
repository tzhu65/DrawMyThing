var React = require('react');
var HelloWorld = require('../../../components/HelloWorld.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');

React.render(
  <HelloWorld />,
  document.getElementById('example')
);
