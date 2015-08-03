'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceNewCtrl', function ($routeParams, $scope, $location,
                                                   ExperienceFactory, LocationFactory) {

    $scope.exp = {
      company_name: '',
      position: '',
      started_on: '',
      ended_on: '',
      client_id: $routeParams.clientId
    };

    $scope.create = function(){
      ExperienceFactory.createExperience($scope.exp)
        .success(function () {
          LocationFactory.goToClientIndex($scope.exp.client_id);
        });
    }

    $(document).ready(function(){
      common.datepicker.init();
    });

  });
