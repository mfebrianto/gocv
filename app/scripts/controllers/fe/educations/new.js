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
                                                   EducationFactory, LocationFactory) {

    $scope.edu = {
      school_name: '',
      city: '',
      country: '',
      start: '',
      end: '',
      faculty: '',
      client_id: $routeParams.clientId
    };

    $scope.create = function(){
      EducationFactory.createEducation($scope.edu)
        .success(function () {
          LocationFactory.goToClientIndex($scope.edu.client_id);
        });
    }

  });
