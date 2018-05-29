/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('app').controller('SomeLazyController', function($scope)
{
    $scope.key = '...';
});

// Registering a controller after app bootstrap
$controllerProvider.register('SomeLazyController', function($scope)
{
   $scope.key = '...'; 
});

// Registering a directive after app bootstrap
$compileProvider.directive('SomeLazyDirective', function()
{
    return {
        restrict: 'A',
        templateUrl: 'templates/some-lazy-directive.html'
    }
})
// etc
(function()
{
 var app = angular.module('app', []);
 app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide){
    app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;
     // Register routes with the $routeProvider
    });
})();

