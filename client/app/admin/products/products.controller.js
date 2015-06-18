'use strict';

angular.module('siteTemplateApp')
  .controller('AdminProductsCtrl', function ($scope, $http, Auth, Product) {

    // Use the User $resource to fetch all users
    $scope.products = Product.query();

    $scope.delete = function(user) {
      Product.remove({ id: product._id });
      angular.forEach($scope.products, function(u, i) {
        if (u === product) {
          $scope.products.splice(i, 1);
        }
      });
    };
  });
