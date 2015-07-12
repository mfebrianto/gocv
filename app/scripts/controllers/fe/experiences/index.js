'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceIndexCtrl', function ($location, $scope, ExperienceFactory, $routeParams) {

    $scope.experience = {
      clientId : ''
    }

    $scope.experiences = [];

    $scope.fillTable = function(){
      console.log(">>>>>"+$scope.experience.clientId);
      //ExperienceFactory.getExperiencesBasedOnClientId()
    }

    $scope.fillTable();

    $scope.init = function(clientId){
      console.log(">>>>"+clientId);
    }

    $scope.changeView = function(id){
      $location.path('/client/exp/'+id); // path not hash
    }

  });
