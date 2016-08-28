/**
 * Created by SURAJ on 8/28/2016.
 */
DEBUG = true;
var defaultToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjMmI4ZTc3MC02ZDVlLTExZTYtOTcxMC00OTkxZmQyYTk5N2UiLCJpYXQiOjE0NzI0MTY1Mjd9.M6Zb27bQKYH9uh4_4cHYe-qQXMjSX-S8C596Qt-eV-M";
var app = angular.module('pingme', ['ngCookies', 'ui.router']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['pingme']);
});

//App Router
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .state('home',{
            url:'/home',
            templateUrl:'templates/home.html',
            controller:'homeController'
        });
}]);


