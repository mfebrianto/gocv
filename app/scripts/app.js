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
      .when('/clients/new', {
        templateUrl: 'views/clients/new.html',
        controller: 'ClientCtrl'
      })
      .when('/admin/clients', {
        templateUrl: 'views/admin/clients/index.html',
        controller: 'AdminClientsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
