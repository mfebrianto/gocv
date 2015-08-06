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
    //
    //experienceFactory.deleteExperience = function(id){
    //  return $http.delete(baseUrl+"/"+id+".json");
    //}
    //
    //experienceFactory.updateExperience = function(expId, exp){
    //  return $http.put(baseUrl+"/"+expId+".json", exp);
    //}

    return educationFactory;
  });
