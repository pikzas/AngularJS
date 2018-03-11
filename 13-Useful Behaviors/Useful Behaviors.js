angular.module('myApp',[])
    .directive('addClass',function () {
        return function ($scope,element,attr) {
            element.bind('mouseenter',function () {
                element.addClass(attr.myData);
            })
        }
    })
    // .directive('addClass',function () {
    //     return function ($scope,element) {
    //         element.bind('mouseenter',function () {
    //             element.addClass('panel');
    //         })
    //     }
    // })
    .directive('delClass',function () {
        return function ($scope,element,attr) {
            element.bind('mouseleave',function () {
                element.removeClass(attr.myData);
            })
        }
    })