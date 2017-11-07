'use strict';

/**
 * @ngdoc function
 * @name lifeazDemoApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the lifeazDemoApp
 */
angular.module('lifeazDemoApp')
  .controller('DashboardCtrl', function($scope, account) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.account = account.getAccount();
  });
