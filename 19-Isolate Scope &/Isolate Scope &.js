angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    $scope.callHome = function (data) {
        alert(data);
    }
})
.directive('phone',function () {
    return {
        scope:{
            dial:'&'
        },
        template:'<input type="text" ng-model="message">' +
        '<div class="button" ng-click="dial({msg:message})">call me</div>'
    }
})