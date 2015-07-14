'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEditCtrl', function (ClientFactory, ClientService, LocationFactory, $scope, $routeParams) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }

    if ($routeParams.clientId != nil){
      $scope.create = function(){
        ClientFactory.createClient($scope.client)
          .success(function(){
            LocationFactory.goToClientIndex(ClientService.getClientId());
          })
      }
    }
    else{
      ClientFactory.getClient($scope.client)
        .success(function(data){
          $scope.client = data;
        })
    }

  })




  });
