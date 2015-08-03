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

    ClientFactory.getClient(ClientService.getClientId())
      .success(function(data){
        $scope.client = data;
      })

    $scope.update = function(){
      ClientFactory.updateClient(ClientService.getClientId(), $scope.client)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        })
    }

  });
