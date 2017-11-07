'use strict';

/**
 * @ngdoc service
 * @name lifeazDemoApp.account
 * @description
 * # account
 * Service in the lifeazDemoApp.
 */
angular.module('lifeazDemoApp')
  .service('account', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var activeCompany = {
      'companyName': 'Cool Inc.',
      'createdYear': 2017
    };

    function setAccount(company) {
      activeCompany.companyName = company.companyName;
      activeCompany.createdYear = company.createdYear;

    }

    function getAccount() {
      return activeCompany;
    }

    return {
      setAccount: setAccount,
      getAccount: getAccount
    };
  });
