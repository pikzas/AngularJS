angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    $scope.try = function () {
        alert(111);
    }
});