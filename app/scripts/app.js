'use strict';

/**
 * @ngdoc overview
 * @name lifeazDemoApp
 * @description
 * # lifeazDemoApp
 *
 * Main module of the application.
 */
angular
  .module('lifeazDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
