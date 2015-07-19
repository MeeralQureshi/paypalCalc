var payPal = angular.module('payPal', []);

payPal.controller('payCtrl', ['$scope', '$http', function($scope, $http){
  console.log('sup from controlelr');
  $scope.Submit = function Submit(){
  	console.log("submit");
  }
}])