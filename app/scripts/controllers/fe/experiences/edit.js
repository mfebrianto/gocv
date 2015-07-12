'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceEditCtrl', function ($routeParams, $scope, ExperienceFactory) {

    $scope.exp = {
      company: '',
      started_on: '',
      ended_on: '',
      client_id: $routeParams.clientId
    };

    $scope.create = function(){
      ExperienceFactory.createExperience($scope.exp)
        .success(function(){
          console.log(">>>>>>experience created");
        });
    }

  });
