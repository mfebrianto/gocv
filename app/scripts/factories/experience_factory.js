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

    experienceFactory.getExperiencesBasedOnClientId = function(id){
      return $http.get(baseUrl+"/"+id+"/client.json");
    }

    experienceFactory.getExperience = function(id){
      return $http.get(baseUrl+"/"+id+".json");
    }

    experienceFactory.updateExperience = function(expId, exp){
      return $http.put(baseUrl+"/"+expId+".json", exp);
    }

    return experienceFactory;
  });
