angular.module('myApp',[])
    .filter('myReverse',function () {
        return function(text){
            return text.split("").reverse().join("")
        }
    })
    .controller('myCtrl',function ($scope) {
    })