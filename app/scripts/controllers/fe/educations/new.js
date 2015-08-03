'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEduNewCtrl', function ($routeParams, $scope, $location,
                                                   ExperienceFactory, LocationFactory) {

    $scope.edu = {
      school_name: '',
      city: '',
      country: '',
      start: '',
      end: '',
      faculty: '',
      client_id: $routeParams.clientId
    };

    //$scope.create = function(){
    //  ExperienceFactory.createExperience($scope.exp)
    //    .success(function () {
    //      LocationFactory.goToClientIndex($scope.exp.client_id);
    //    });
    //}

  });
