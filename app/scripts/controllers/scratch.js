'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('scratchCtrl', function ($scope, $controller) {
    angular.extend(this, $controller('ClientIndexCtrl', {$scope: $scope}));

  });
