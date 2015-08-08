'use strict';

angular.module('gocvApp')
  .factory('EducationFactory', function($http) {

    var baseUrl = "/my-account/educations"
    var educationFactory = {};

    educationFactory.createEducation = function(education){
      return $http.post(baseUrl+".json", education);
    }

    //experienceFactory.getAllExperiences = function(){
    //  return $http.get(baseUrl+".json");
    //}

    educationFactory.getEducationsBasedOnClientId = function(id){
      return $http.get(baseUrl+"/"+id+"/client.json");
    }

    educationFactory.getEducation = function(id){
      return $http.get(baseUrl+"/"+id+".json");
    }

    educationFactory.deleteEducation = function(id){
      return $http.delete(baseUrl+"/"+id+".json");
    }

    educationFactory.updateEducation = function(eduId, edu){
      return $http.put(baseUrl+"/"+eduId+".json", edu);
    }

    return educationFactory;
  });
