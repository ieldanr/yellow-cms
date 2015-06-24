'use strict';

angular.module('siteTemplateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/nosotros',
        templateUrl: 'app/site/about/about.html',
        controller: 'AboutCtrl'
      });
  });