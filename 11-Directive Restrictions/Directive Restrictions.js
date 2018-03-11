angular.module('myApp',[])
.directive('myDirective',function () {
        return{
            restrict:'AE',
            link : function () {
                alert('i am working');
            }

        }
    })
    .directive('secondDirective',function () {
        return{
            restrict:'AE',
            link:function () {
                alert('i am the second one');
            }
        }
    })
