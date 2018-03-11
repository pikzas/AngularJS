angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    $scope.try = function () {
        alert(111);
    }
}).directive('communicateWithCtrl',function () {
    return function ($scope,element,attr) {
        element.bind('mouseenter',function () {
            // $scope.try();
            // $scope.$apply("try()");
            $scope.$apply(attr.myData);
        })
    }
})