'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEduEditCtrl', function ($routeParams, $scope, $location, $filter,
                                                    EducationFactory, LocationFactory, ClientService) {

    $scope.edu = {
      school_name: '',
      city: '',
      country: '',
      start: '',
      end: '',
      faculty: '',
      id: $routeParams.eduId
    };

    this.loadChosenEdu = function(){
      EducationFactory.getEducation($routeParams.eduId)
        .success(function(data){
          $scope.edu = data;
        });
    }

    this.loadChosenEdu();

    $scope.update = function(){
      delete $scope.edu['client_id'];
      delete $scope.edu['created_at'];
      delete $scope.edu['updated_at'];
      EducationFactory.updateEducation($scope.edu.id, $scope.edu)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        });
    }

    $scope.delete = function(id){
      EducationFactory.deleteEducation(id)
        .success(function(){
          LocationFactory.goToClientIndex(ClientService.getClientId());
        });
    }

  });
