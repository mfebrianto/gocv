'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientIndexCtrl', function (ClientFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }

    $scope.getClient = function(client_id){

    }


  });
