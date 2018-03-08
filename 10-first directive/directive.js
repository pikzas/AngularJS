angular.module('myApp',[])
    .directive('myDirective',function () {
        return {
            restrict: 'EA',
            replace: true,
            template: "<div>i am here to save you</div>"
        }
    })
