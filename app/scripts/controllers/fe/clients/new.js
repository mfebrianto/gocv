'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientNewCtrl', function (ClientFactory, ClientService,
                                          LocationFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }


    $scope.create = function(){
      ClientFactory.createClient($scope.client)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        })
    }



  });
