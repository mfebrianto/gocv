'use strict';

angular.module('gocvApp')
  .factory('ScratchFactory', function($http) {

    var scratchFactory = {};
    var baseUrl = "/my-account/scratch/"


    scratchFactory.new = function(){
      return $http.get(baseUrl+"new.json");
    }

    return scratchFactory;
  });
