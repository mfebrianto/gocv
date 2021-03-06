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
    'ngTouch',
    'ngFileUpload'
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
      .when('/clients/scratch', {
        templateUrl: 'views/clients/index.html',
        controller: 'ClientIndexCtrl'
      })
      .when('/admin/clients', {
        templateUrl: 'views/admin/clients/index.html',
        controller: 'AdminClientsCtrl'
      })
      .when('/client/exp/:clientId', {
        templateUrl: 'views/experiences/new.html',
        controller: 'ClientExperienceNewCtrl'
      })
      .when('/exp/:expId/edit', {
        templateUrl: 'views/experiences/edit.html',
        controller: 'ClientExperienceEditCtrl'
      })
      .when('/client/edu/:clientId', {
        templateUrl: 'views/educations/new.html',
        controller: 'ClientEduNewCtrl'
      })
      .when('/edu/:eduId/edit', {
        templateUrl: 'views/educations/edit.html',
        controller: 'ClientEduEditCtrl'
      })
      .when('/scratch/:id', {
        templateUrl: 'views/scratch.html',
        controller: 'scratchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
