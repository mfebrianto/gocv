'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceEditCtrl', function (experienceFactory, $routeParams, $scope) {

    $scope.exp = {
      client_id: $routeParams.clientId
    };

    $scope.create = function(){
      experienceFactory.createExperience($scope.exp)
        .success(function(){
          console.log(">>>>>>experience created");
        });
    }

  });
