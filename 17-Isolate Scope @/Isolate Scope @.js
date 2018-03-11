angular.module('myApp',[])
.controller('myCtrl',function ($scope) {
    $scope.ctrlFlavor = "blackBerry";
})
.directive('drink',function(){
    return {
        scope:{
            flavor:'@'
        },
        template:"<input type='text' ng-model='flavor'><div>{{flavor}}</div>",
    }
})