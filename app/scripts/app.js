'use strict';

/**
 * @ngdoc overview
 * @name gocvApp
 * @description
 * # gocvApp
 *
 * Main module of the application.
 */
angular
  .module('gocvApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/client/:clientId', {
        templateUrl: 'views/clients/index.html',
        controller: 'ClientIndexCtrl'
      })
      .when('/client/:clientId/edit', {
        templateUrl: 'views/clients/edit.html',
        controller: 'ClientEditCtrl'
      })
      .when('/clients/new', {
        templateUrl: 'views/clients/new.html',
        controller: 'ClientNewCtrl'
      })
      .when('/admin/clients', {
        templateUrl: 'views/admin/clients/index.html',
        controller: 'AdminClientsCtrl'
      })
      .when('/client/exp/:clientId', {
        templateUrl: 'views/experiences/edit.html',
        controller: 'ClientExperienceEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
