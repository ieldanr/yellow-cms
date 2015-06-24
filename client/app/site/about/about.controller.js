'use strict';

angular.module('siteTemplateApp')
  .controller('AboutCtrl', function ($scope, $http, Mailgun, $injector) {
    $scope.products = [];
    var $validationProvider = $injector.get('$validation');

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.formTravel = {            
      checkValid: $validationProvider.checkValid,
      submit: function (form) {
        //Se valida que el formulario este completo
        $validationProvider.validate(form)
          .success(function(message){                  
            $scope.respCreate = Mailgun.sendmail(createObject($scope.contact), function(data){                    
              $validationProvider.reset(form);
              $scope.sucess = $translate("CONTACT.SEND_SUCCESS");                    
              $scope.error = '';
            });
          })
          .error(function(message){
            $scope.sucess = '';
            $scope.error = $translate("CONTACT.SEND_ERROR");                  
          });
      },
      reset: function (form) {
        $scope.sucess = '';
        $validationProvider.reset(form);
      }
    };

    function createObject(contact){
      return {
        'key': 'AXj5CsBchLyqt2w1xBnelA',
        'message': {
          'from_email': contact.email,
          'to': [
              {
                'email': 'hola@yellowme.mx',
                'name': 'Yellowme',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Enviado desde Yellowme Page',
          'html': 'Nombre: '+ contact.name + ', asunto: ' + contact.body
        }
      }
    }  
  });  
