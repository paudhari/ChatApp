/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module ('app', ['ngRoute']);
app.config(['$routeProvider', '$controllerProvider', function($routeProvider,$controllerProvider){
/*Creating a more synthesized form of service of $ controllerProvider.register*/
app.registerCtrl = $controllerProvider.register;

 function loadScript(path) {
   var result = $.Deferred(),
   script = document.createElement("script");
   script.async = "async";
   script.type = "text/javascript";
   script.src = path;
   script.onload = script.onreadystatechange = function (_, isAbort) {
    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
         if (isAbort)
             result.reject();
         else
            result.resolve();
    }
  };
  script.onerror = function() { result.reject(); };
  document.querySelector("head").appendChild(script);
  return result.promise();
}

function loader(arrayName){
    
     return {
      load: function($q){
        var deferred = $q.defer(),
        map = arrayName.map(function(name) {
         return loadScript('js/controllers/'+name+".js");
        });
        $q.all(map).then(function(r){
            deferred.resolve();
        });
        return deferred.promise;
        }
    };
}

$routeProvider  
    .when('/', {
        templateUrl: 'views/foo.html',
        resolve: loader(['foo'])
    })
    .when('/bar',{
        templateUrl: 'views/bar.html',
        controller: 'BarCtrl',
        resolve: loader(['bar'])
    })
    .otherwise({
        redirectTo: document.location.pathname
    });
}]);


var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope) {
     $scope.name = "Peter";
     $scope.user = {
      name: "Parker"
   };
});

var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.firstname = "John";
});

app.controller("MyNestedCtrl", function($scope) {
});

