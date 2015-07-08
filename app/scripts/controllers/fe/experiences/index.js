'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceIndexCtrl', function ($location, $scope, ClientService, ExperienceFactory) {

    $scope.experience = {
      clientId : ''
    }

    $scope.experiences = [];

    $scope.fillTable = function(){
      ExperienceFactory.getExperiencesBasedOnClientId(ClientService.getClientId())
    }

    $scope.fillTable();

    $scope.test=function(clientId){
      console.log('this is a test>>>>'+clientId);
    }

    $scope.changeView = function(id){
      $location.path('/client/exp/'+id); // path not hash
    }

  });
