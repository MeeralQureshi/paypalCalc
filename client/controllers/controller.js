var payPal = angular.module('payPal', []);

payPal.controller('payCtrl', ['$scope', '$http', function($scope, $http){
  // Simple POST request example (passing data) :
$http.post('/postPayPal', {msg:'hello word!'}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}])