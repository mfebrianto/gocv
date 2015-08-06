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
      client_id: '',
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
      EducationFactory.updateEducation($scope.edu.id, $scope.edu)
        .success(function(){
          LocationFactory.goToClientIndex($scope.edu.client_id);
        });
    }

    //$scope.delete = function(id){
    //  ExperienceFactory.deleteExperience(id)
    //    .success(function(){
    //      LocationFactory.goToClientIndex($scope.exp.client_id);
    //    });
    //}

  });
