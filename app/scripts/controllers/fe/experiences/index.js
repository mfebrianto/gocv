'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientExperienceIndexCtrl', function ($scope, ClientService, ExperienceFactory, LocationFactory) {

    $scope.experience = {
      clientId : ''
    }

    $scope.experiences = [];

    this.fillTable = function(){
      ExperienceFactory.getExperiencesBasedOnClientId(ClientService.getClientId())
        .success(function(data){
          $scope.experiences = data;
        })
    }

    this.fillTable();

    $scope.changeView = function(clientId){
      LocationFactory.goToClientExpEdit(clientId);
    }

  });
