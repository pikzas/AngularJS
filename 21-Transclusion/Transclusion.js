angular.module('myApp',[])
.controller('myCtrl',function ($scope) {

})
.directive('myDirect',function () {
    return {
        restrict:'E',
        transclude:true,
        template:'<div class="panel" ><div ng-transclude>this is a component</div></div>'
    }
})