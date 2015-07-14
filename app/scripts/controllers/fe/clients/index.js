'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientIndexCtrl', function (ClientService, ClientFactory,
                                           LocationFactory, $location,
                                           $routeParams, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      male_gender: ''
    }

    ClientService.setClientId($routeParams.clientId);

    $scope.getClient = function(){
      ClientFactory.getClient($routeParams.clientId)
        .success(function (client) {
          console.log(">>>>>success>>>"+client.first_name);
          $scope.client = client;
        })
        .error(function (error) {
          $scope.status = 'Error retrieving customers! ' + error.message;
        });
    }

    $scope.editBasicData = function(clientId){
      console.log(">>>>>>>>editBasicData");
      LocationFactory.goToClientEdit(clientId);
    };

    $scope.getClient();

  });
