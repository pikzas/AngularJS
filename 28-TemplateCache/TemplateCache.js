angular.module('myApp',[])
    .run(function ($templateCache) {
        $templateCache.put("xxx.html",'<div class="panel" ng-click="change()">{{title}}</div><div ng-show="isVisable" ng-transclude></div>');
    })
    .controller('myCtrl',function ($scope) {
    })
    .directive('myDirective',function () {
        return {
            restrict:'AE',
            transclude:true,
            scope:{
                title:'@'
            },
            templateUrl:'xxx.html'
            ,
            link:function (scope) {
                scope.isVisable = true;
                scope.change  = function () {
                    scope.isVisable = !scope.isVisable;
                }
            }
        }
    })