'use strict';

/**
 * @ngdoc function
 * @name gocvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gocvApp
 */
angular.module('gocvApp')
  .controller('ClientEduEditCtrl', function ($routeParams, $scope, $location,
                                                    EducationFactory, LocationFactory) {

    $scope.edu = {
      school_name: '',
      city: '',
      country: '',
      start: '',
      end: '',
      faculty: '',
      id: $routeParams.expId
    };

    this.loadChosenEdu = function(){
      EducationFactory.getEducation($routeParams.expId)
        .success(function(data){
          $scope.edu = data;
        });
    }

    this.loadChosenEdu();
    //
    //$scope.update = function(){
    //  ExperienceFactory.updateExperience($scope.exp.id, $scope.exp)
    //    .success(function(){
    //      LocationFactory.goToClientIndex($scope.exp.client_id);
    //    });
    //}
    //
    //$scope.delete = function(id){
    //  ExperienceFactory.deleteExperience(id)
    //    .success(function(){
    //      LocationFactory.goToClientIndex($scope.exp.client_id);
    //    });
    //}

  });
