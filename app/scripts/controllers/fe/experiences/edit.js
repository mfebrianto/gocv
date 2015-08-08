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
                                                   ExperienceFactory, LocationFactory, ClientService) {

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
      delete $scope.exp['client_id'];
      delete $scope.exp['created_at'];
      delete $scope.exp['updated_at'];
      ExperienceFactory.updateExperience($scope.exp.id, $scope.exp)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        });
    }

    $scope.delete = function(id){
      ExperienceFactory.deleteExperience(id)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        });
    }

  });
