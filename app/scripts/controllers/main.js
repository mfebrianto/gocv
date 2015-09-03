'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('MainCtrl', function ($scope, $log, ScratchFactory) {

    $scope.newClientFromScratch = function(){
      //$log.debug('Hello Debug!');
      ScratchFactory.new ()
        .success(function(data){
          $log.debug(data);
        })
    };

  });
