angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    $scope.doneWork = function (x) {
        alert(x + " is done");
    }
})
// .controller('secondCtrl',function ($scope) {
//
// })
.directive('work',function () {
    return {
        restrict:'AE',
        scope:{
            done:"&"
        },
        template:'<input type="text" ng-model="y">{{data}}' +
        '<div class="button" ng-click="done({z:y})">click me</div>'
    }
})