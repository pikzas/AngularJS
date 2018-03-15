angular.module('myApp',[])
    .config(function($logProvider){
        $logProvider.debugEnabled(false);
    })
    .run(function ($rootScope,$log) {
        $rootScope.logger = $log;
    })

