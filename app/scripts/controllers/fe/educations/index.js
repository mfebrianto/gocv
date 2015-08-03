'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEduIndexCtrl', function ($scope, ClientService, ExperienceFactory, LocationFactory) {

    $scope.edu = {
      clientId : ''
    }

    $scope.educations = [];

    //this.fillTable = function(){
    //  ExperienceFactory.getExperiencesBasedOnClientId(ClientService.getClientId())
    //    .success(function(data){
    //      $scope.experiences = data;
    //    })
    //}

    //this.fillTable();

    $scope.changeView = function(clientId){
      LocationFactory.goToClientEduNew(clientId);
    }

  });
