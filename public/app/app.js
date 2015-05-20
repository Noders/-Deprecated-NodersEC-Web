angular.module('app',['uiGmapgoogle-maps'])

.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
})
