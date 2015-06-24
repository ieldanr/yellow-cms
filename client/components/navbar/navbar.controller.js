'use strict';

angular.module('siteTemplateApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });


angular.module('siteTemplateApp').directive("scroll", function ($window) {
  return function($scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 10) {
        $scope.stickyClass = 'sticky';
      } else {
        $scope.stickyClass = '';
      }
      $scope.$apply();
    });
  };
});