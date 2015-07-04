'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('NewClientCtrl', function (AjaxFactory, $scope) {
    $scope.test_ajax_factory = function(){
      console.log(">>>>>"+AjaxFactory.get());
    };

    $scope.test_ajax_factory();
  });
