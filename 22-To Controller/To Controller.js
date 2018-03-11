angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    this.sayHi = function () {
        alert("hi");
    }
    return $scope.myCtrl = this;
})