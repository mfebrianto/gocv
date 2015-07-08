'use strict';

angular.module('gocvApp')
  .service('ClientService', function() {
    var clientIdParam = '';

    this.setClientId = function(clientId){
      clientIdParam = clientId
    }

    this.getClientId = function(){
      return clientIdParam
    }
  });
