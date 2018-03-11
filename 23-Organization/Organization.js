var myApp = angular.module('myApp',[]);
var demoFun = {};
demoFun.controllers = {};
demoFun.controllers.myCtrl = function ($scope) {

    this.sayHi = function () {
        alert("hi");
    }
    return $scope.myCtrl = this;
}


demoFun.directives= {};
demoFun.directives.phone = function () {
    return {
        restrict:'AE',
        template:'<div class="panel" >hello</div> '
    }
}

myApp.controller(demoFun.controllers);
myApp.directive(demoFun.directives);
// myApp.filter();