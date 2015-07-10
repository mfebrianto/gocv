'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceIndexCtrl', function ($location, $routeParams, $scope) {

    $scope.experiences = [];

    $scope.changeView = function(id){
      $location.path('/client/exp/'+id); // path not hash
    }

  });
