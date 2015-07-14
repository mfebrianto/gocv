'use strict';

angular.module('gocvApp')
  .factory('LocationFactory', function($location) {

    var locationFactory = {};

    locationFactory.goToClientIndex = function(clientId){
      $location.path('/client/'+clientId);
    }

    locationFactory.goToClientEdit = function(clientId){
      $location.path('/client/'+clientId);
    }

    locationFactory.goToClientExpEdit = function(clientId){
      $location.path('/client/exp/'+clientId);
    }

    return locationFactory;
  });
