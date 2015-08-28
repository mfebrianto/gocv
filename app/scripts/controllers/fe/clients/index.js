'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientIndexCtrl', function (ClientService, ClientFactory,
                                           LocationFactory, $location,
                                           $routeParams, $scope, fileReader) {

    $scope.client = {
      first_name: '',
      last_name: '',
      dob: '',
      male_gender: ''
    }

    $scope.imageSrc = "images/profile-img.png";

    $scope.getFile = function () {
      $scope.progress = 0;
      fileReader.readAsDataUrl($scope.file, $scope)
        .then(function(result) {
          $scope.imageSrc = result;
        });
    };

    ClientService.setClientId($routeParams.clientId);

    $scope.getClient = function(){
      ClientFactory.getClient($routeParams.clientId)
        .success(function (client) {
          console.log(">>>>>success>>>"+client.first_name);
          $scope.client = client;
        })
        .error(function (error) {
          $scope.status = 'Error retrieving customers! ' + error.message;
        });
    };

    // upload on file select or drop
    $scope.upload = function (file) {
      Upload.upload({
        url: 'upload/url',
        fields: {'username': $scope.username},
        file: file
      }).progress(function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
      }).success(function (data, status, headers, config) {
        console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
      }).error(function (data, status, headers, config) {
        console.log('error status: ' + status);
      })
    };

    $scope.editBasicData = function(clientId){
      console.log(">>>>>>>>editBasicData");
      LocationFactory.goToClientEdit(clientId);
    };

    $scope.getClient();

  });
