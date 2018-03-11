angular.module('myApp',[])
.directive('directiveEvent',function () {
    return function ($scope,element) {
        element.bind('mouseenter',function () {
            console.log("i am in"+new Date());
        })
    }
})
.directive('directiveEvent2',function () {
    return function ($scope,element) {
        element.bind('mouseleave',function () {
            console.log('i am out'+ new Date())
        });
    }
})