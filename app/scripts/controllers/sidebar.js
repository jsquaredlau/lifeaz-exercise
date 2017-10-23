'use strict';

/**
 * @ngdoc function
 * @name lifeazDemoApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the lifeazDemoApp
 */
angular.module('lifeazDemoApp')
  .controller('SidebarCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.testing = "well fk me";
  });
