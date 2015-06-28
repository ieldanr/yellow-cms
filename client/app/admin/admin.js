'use strict';

angular.module('siteTemplateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin_products', {
        url: '/admin/products',
        templateUrl: 'app/admin/products/products.html',
        controller: 'AdminProductsCtrl',
        authenticate: true
      })
      .state('admin_docs', {
        url: '/admin/docs',
        templateUrl: 'app/admin/docs/docs.html',
        controller: 'AdminDocsCtrl',
        authenticate: true
      })
      .state('admin_timeline', {
        url: '/admin/timeline',
        templateUrl: 'app/admin/timeline/timeline.html',
        controller: 'AdminTimelineCtrl',
        authenticate: true
      })
      .state('admin_dashboard', {
        url: '/admin/dashboard',
        templateUrl: 'app/admin/dashboard/dashboard.html',
        controller: 'AdminDashboardCtrl',
        authenticate: true
      })
      .state('admin_clients', {
        url: '/admin/clients',
        templateUrl: 'app/admin/clients/clients.html',
        controller: 'AdminClientsCtrl',
        authenticate: true
      })
      .state('admin_users', {
        url: '/admin/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'AdminUsersCtrl',
        authenticate: true
      });
  });