angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {
        $scope.reverse = function (data) {
            return data.toString().split("").reverse().join("");
        }
    })
