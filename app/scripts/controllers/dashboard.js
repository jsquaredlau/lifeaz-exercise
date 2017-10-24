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

    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    $scope.data = [300, 500, 100];
  });
