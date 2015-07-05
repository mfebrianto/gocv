'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEditCtrl', function (ClientFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }

    $scope.create = function(){
      ClientFactory.createClient($scope.client)
        .success(function(){
          console.log(">>>>>>client created");
        })
        .error(function(){
          console.log(">>>>>>client creation failed");
        })
    }

    $scope.getClient = function(client_id){

    }


  });
