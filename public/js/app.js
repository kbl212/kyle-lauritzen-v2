var app = angular.module('kyle-lauritzen', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'views/homeTmpl.html',
        controller: 'homeCtrl'
        
    })
    
    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolioTmpl.html',
        controller: 'portfolioCtrl'
        
    })
    
    .state('resume', {
        url: '/resume',
        templateUrl: 'views/resumeTmpl.html',
        controller: 'resumeCtrl'
    })
    
    $urlRouterProvider
        .otherwise('/');
    
});