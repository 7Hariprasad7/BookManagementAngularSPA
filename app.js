var myApp = angular.module('myApp', ['ngRoute']);

    myApp.config(function($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        .when('/books', {
            templateUrl : 'books.html',
            controller  : 'booksController'
        })

        .when('/authors', {
            templateUrl : 'authors.html',
            controller  : 'authorsController'
        })
        .when('/popBooks', {
            templateUrl : 'popBooks.html',
            controller  : 'popBooksController'
        })
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.message = 'Buy Books Online';
});

myApp.controller('booksController', function($scope) {
    $scope.message = 'Books';
});

myApp.controller('authorsController', function($scope) {
    $scope.message = 'Book Authors';
});
myApp.controller('popBooksController', function($scope) {
    $scope.message = 'MOST POPULAR BOOKS';
});
myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact Us Here';
});