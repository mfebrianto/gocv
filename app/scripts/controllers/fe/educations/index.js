'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEduIndexCtrl', function ($scope, ClientService, EducationFactory, LocationFactory) {

    $scope.edu = {
      clientId : ''
    }

    $scope.educations = [];

    this.fillTable = function(){
      EducationFactory.getEducationsBasedOnClientId(ClientService.getClientId())
        .success(function(data){
          $scope.educations = data;
        })
    }

    this.fillTable();

    $scope.changeView = function(clientId){
      LocationFactory.goToClientEduNew(clientId);
    }

  });
