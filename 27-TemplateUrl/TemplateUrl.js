angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {
    })
    .directive('myDirective',function () {
        return {
            restrict:'AE',
            transclude:true,
            scope:{
                title:'@'
            },
            templateUrl:'temp.html'
            ,
            link:function (scope) {
                scope.isVisable = true;
                scope.change  = function () {
                    scope.isVisable = !scope.isVisable;
                }
            }
        }
    })