'use strict';

angular.module('gocvApp')
  .factory('ClientFactory', function($http) {

    var baseUrl = "/my-account/clients"
    var clientFactory = {};

    clientFactory.createClient = function(client){
      return $http.post(baseUrl+".json", client);
    }

    clientFactory.updateClient = function(clientId, client){
      return $http.put(baseUrl+"/"+clientId+".json", client);
    }

    clientFactory.getAllClients = function(){
      return $http.get(baseUrl+".json");
    }

    clientFactory.getClient = function(id){
      return $http.get(baseUrl+"/"+id+".json");
    }

    return clientFactory;
});
