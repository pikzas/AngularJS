angular.module('myApp',[])
.directive('myDirect',function () {
    return {
        restrict:'AE',
        scope:{},
        controller:function ($scope) {
            $scope.abilities = [];
            this.addStrength = function () {
                $scope.abilities.push("strength");
            }
            this.addFly = function () {
                $scope.abilities.push("fly");
            }
            this.addFlash = function () {
                $scope.abilities.push("flash");
            }
        },
        link:function ($scope,element,attr) {
            element.bind('mouseenter',function () {
                element.addClass("button")
                console.log($scope.abilities)
            })
        }
    }
})
    .directive('strength',function () {
        return {
            require:'my-direct',
            link:function ($scope,element,attr,myDirectCtrl) {
                myDirectCtrl.addStrength();
            }
        }
    })
    .directive('fly',function () {
        return {
            require:'myDirect',
            link:function ($scope,element,attr,myDirectCtrl) {
                myDirectCtrl.addFly();
            }
        }
    })
    .directive('flash',function () {
        return {
            require:'myDirect',
            link:function ($scope,element,attr,myDirectCtrl) {
                myDirectCtrl.addFlash();
            }
        }
    })