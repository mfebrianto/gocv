'use strict';

angular.module('gocvApp')
  .factory('ExperienceFactory', function($http) {

    var baseUrl = "/my-account/experiences"
    var experienceFactory = {};

    experienceFactory.createExperience = function(experience){
      return $http.post(baseUrl+".json", experience);
    }

    experienceFactory.getAllExperiences = function(){
      return $http.get(baseUrl+".json");
    }

    experienceFactory.getExperience = function(id){
      return $http.get(baseUrl+"/"+id+".json");
    }

    return experienceFactory;
  });
