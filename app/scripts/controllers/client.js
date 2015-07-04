'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientCtrl', function (ClientFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      gender: ''
    }

    $scope.create = function(){
      console.log(">>>>create"+$scope.client['first_name']);
    }


  });
