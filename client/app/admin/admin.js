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
      .state('admin_users', {
        url: '/admin/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'AdminUsersCtrl',
        authenticate: true
      });
  });