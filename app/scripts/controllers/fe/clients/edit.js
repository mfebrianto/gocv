'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEditCtrl', function (ClientFactory, ClientService,
                                          LocationFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }


    ClientFactory.getClient(ClientService.getClientId())
      .success(function(data){
        $scope.client = data;
      })

  });
