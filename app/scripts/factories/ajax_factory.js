'use strict';

angular.module('gocvApp')
  .factory('AjaxFactory', function($http) {
    var factory = {};

    factory.get = function(){
      return "this is coming from factory"
    }

  return factory;
});
