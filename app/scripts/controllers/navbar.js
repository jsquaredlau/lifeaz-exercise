'use strict';

/**
 * @ngdoc function
 * @name lifeazDemoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the lifeazDemoApp
 */
angular.module('lifeazDemoApp')
  .controller('NavbarCtrl', function($scope, account) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $http.get("http://localhost/app_dev.php/companies?page=1")
    //   .then(function(response) {
    //     console.log(response);
    //   });

    $scope.currentUser = 'John Doe';

    $scope.companies = [{
      'idCompany': 1001,
      'companyName': 'Cool Inc.',
      'createdYear': 2017,
      'username': 'John Doe'
    }, {
      'idCompany': 1002,
      'companyName': 'Lifeaz',
      'createdYear': 2015,
      'username': 'Johann K'
    }, {
      'idCompany': 1003,
      'companyName': 'Evil Corp.',
      'createdYear': 2007,
      'username': 'John Doe'
    }, {
      'idCompany': 1004,
      'companyName': 'Money&Co.',
      'createdYear': 2017,
      'username': 'Kanye West'
    }, {
      'idCompany': 1005,
      'companyName': 'Beat It Inc.',
      'createdYear': 1994,
      'username': 'Michael Jackson'
    }];

    $scope.setActiveCompany = function(company) {
      account.setAccount(company);
      $scope.currentUser = company.username;
    };

    $scope.menuActive = false;

  });
