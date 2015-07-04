'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('AdminClientsCtrl', function (ClientFactory, $scope) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      male_gender: ''
    };

    $scope.clients = [];

    $scope.getAllClients = function(){
      ClientFactory.getAllClients()
        .success(function(clients){
          $scope.clients = clients;
        })
        .error(function(){
          console.log(">>>>>>fetch client failed");
        })
    }

    $scope.getAllClients();


  });
