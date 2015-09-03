'use strict';

angular.module('gocvApp')
  .factory('LocationFactory', function($location) {

    var locationFactory = {};

    locationFactory.goToClientIndex = function(clientId){
      $location.path('/client/'+clientId);
    }

    locationFactory.goToClientEdit = function(clientId){
      $location.path('/client/'+clientId+'/edit');
    }

    locationFactory.goToClientExpEdit = function(clientId){
      $location.path('/client/exp/'+clientId);
    }

    locationFactory.goToClientEduNew = function(clientId){
      $location.path('/client/edu/'+clientId);
    }

    locationFactory.notFound = function(){
      window.location = $location.protocol() + '://'+ $location.host() +'/404.html'
    }

    return locationFactory;
  });
