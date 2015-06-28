'use strict';

angular.module('siteTemplateApp')
  .controller('AdminClientsCtrl', function ($scope, $http, Auth, Product) {

    // Use the User $resource to fetch all users
    $scope.clients = [
      { 
        name: "Burguer King", 
        phone: "8484883", 
        city: "Merida", 
        expanded: false,
        childs: [
          {
            name: "Burguer King Pinos", 
            phone: "8484883", 
            city: "Merida", 
          },
          {
            name: "Burguer King Oriente", 
            phone: "8484883", 
            city: "Merida", 
          },
          {
            name: "Burguer King Fiesta", 
            phone: "8484883", 
            city: "Merida", 
          },
        ]
      },
      {
        name: "Despacho Lavalle", 
        phone: "99844343", 
        city: "Merida", 
        childs: []
      },
      {
        name: "Lavafuentes", 
        phone: "9938383", 
        city: "Merida",
        childs: []
      }
    ];
  });
