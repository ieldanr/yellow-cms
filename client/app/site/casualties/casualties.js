'use strict';

angular.module('siteTemplateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('casualties', {
        url: '/siniestros',
        templateUrl: 'app/site/casualties/casualties.html',
        controller: 'CasualtiesCtrl'
      });
  });