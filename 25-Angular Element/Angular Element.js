angular.module('myApp',[])
    .directive('myPass',function () {
        var validElement = angular.element("<div>{{model.pwd}}</div>");
        this.link = function (scope) {
            scope.$watch("model.pwd",function (newVal) {
                if(newVal === 'password'){
                    validElement.toggleClass("alert-box alert");
                }else{
                    validElement.removeClass("alert-box alert");
                }
            })
        }
        return {
            restrict:'E',
            replace:true,
            template:'<div><input type="text" ng-model="model.pwd"></div>',
            compile:function (tElem) {
                tElem.append(validElement);
                return link;
            }
        }
    })