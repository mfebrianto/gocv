'use strict';

angular.module('gocvApp')
  .factory('ClientFactory', function($http) {

    var baseUrl = "/my-account/clients"
    var clientFactory = {};

    clientFactory.createClient = function(client){
      return $http.post(baseUrl, client);
    }

  return clientFactory;
});
