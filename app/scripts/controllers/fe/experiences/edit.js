'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceEditCtrl', function ($routeParams, $scope, $location,
                                                   ExperienceFactory, LocationFactory) {

    $scope.exp = {
      company: '',
      position: '',
      started_on: '',
      ended_on: '',
      client_id: '',
      id: $routeParams.expId
    };

    this.loadChosenExp = function(){
      ExperienceFactory.getExperience($routeParams.expId)
        .success(function(data){
          $scope.exp = data;
        });
    }

    this.loadChosenExp();

    $scope.update = function(){
      ExperienceFactory.updateExperience($scope.exp.id, $scope.exp)
        .success(function(){
          LocationFactory.goToClientIndex($scope.exp.client_id);
        });
    }

    $scope.delete = function(id){
      ExperienceFactory.deleteExperience(id)
        .success(function(){
          LocationFactory.goToClientIndex($scope.exp.client_id);
        });
    }

    common.datepicker.init();

  });
