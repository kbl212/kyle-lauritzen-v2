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
    
    .state('about', {
        url: '/about',
        templateUrl: 'views/aboutTmpl.html',
        controller: 'aboutCtrl'
    })
    
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contactTmpl.html',
        controller: 'contactCtrl'
    })
    
    $urlRouterProvider
        .otherwise('/');
    
});