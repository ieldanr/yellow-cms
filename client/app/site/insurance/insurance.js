'use strict';

angular.module('siteTemplateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('insurance', {
        url: '/seguros',
        templateUrl: 'app/site/insurance/insurance.html',
        controller: 'InsuranceCtrl'
      });
  });