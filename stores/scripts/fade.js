var async = require('async');

var openComponents = [];
var $ = jQuery;

var fade = {};
var fadeOutTime = 1000;
var fadeInTime = 1000;

fade.performCallbacks = function(callback, componentId) {
  if (callback !== undefined) {
    if (callback.forEach === undefined) {
      callback = [callback];
    }
    callback.forEach(function(cb) {
      if (componentId !== undefined) {
        cb(componentId);
      } else {
        cb();
      }
    });
  }
};

fade.hideComponent = function(componentId) {
  var component = $('#' + componentId);
  component.css('display', 'none');
  var index = openComponents.indexOf(componentId);
  if (index > -1) {
    openComponents.splice(index, 1);
  }
};

fade.unhideComponent = function(componentId) {
  var component = $('#' + componentId);
  component.css('display', 'block');
};

fade.fadeComponents = function(components, callback, componentCallback) {
  async.each(components, function(componentId, cb) {
    var component = $('#' + componentId);
    component.animate({opacity: 0}, fadeOutTime, function() {
      fade.performCallbacks(componentCallback, componentId);
      cb();
    });
  }, function(err) {
    if (err) {
      console.log(err);
    }
    fade.performCallbacks(callback);
  });
};

fade.fadeAndHideComponents = function(components, callback, componentCallback) {
  if (componentCallback === undefined) {
    componentCallback = fade.hideComponent;
  } else {
    componentCallback.push(fade.hideComponent);
  }
  fade.fadeComponents(components, callback, componentCallback);
};

fade.fadeAllActive = function(callback, componentCallback) {
  fade.fadeComponents(openComponents, callback, componentCallback);
};

fade.fadeAndHideAllActive = function(callback, componentCallback) {
  fade.fadeAndHideComponents(openComponents, callback, componentCallback);
};

fade.fadeInComponents = function(components, callback, componentCallback) {
  async.each(components, function(componentId, cb) {
    var component = $('#' + componentId);
    component.animate({opacity: 1}, fadeInTime, function() {
      fade.performCallbacks(componentCallback, componentId);
      cb();
    });
  }, function(err) {
    if (err) {
      console.log(err);
    }
    fade.performCallbacks(callback);
  });
};

fade.fadeInAndUnhideComponents = function(components, callback, componentCallback) {
  async.each(components, function(componentId, cb) {
    $('#' + componentId).css('opacity', '0');
    fade.unhideComponent(componentId);
    cb();
  }, function(err) {
    if (err) {
      console.log('problem unhiding components...');
    }
    fade.fadeInComponents(components, callback, componentCallback);
  });
};

module.exports = fade;
