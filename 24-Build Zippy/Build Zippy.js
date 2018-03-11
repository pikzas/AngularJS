angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {

    })
    .directive('zippy',function () {
        return {
            restrict:'E',
            transclude:true,
            scope:{
                title:'@',
            },
            template:'<div><h2 ng-click="change()">{{title}}</h2><div ng-show="isVisable" ng-transclude></div></div>',

            link:function (scope) {
                scope.isVisable = true;
                scope.change = function () {
                    scope.isVisable = !scope.isVisable;
                }
            }
        }
    })