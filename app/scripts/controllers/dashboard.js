'use strict';

/**
 * @ngdoc function
 * @name lifeazDemoApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the lifeazDemoApp
 */
angular.module('lifeazDemoApp')
  .controller('DashboardCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.username = 'John Doe';
    $scope.companyName = 'Cool Society Inc';
    $scope.creationDate = 2017;

  });
