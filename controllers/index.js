var app = angular.module("app", []);

app.controller("IndexCtrl", function ($scope, $http) {

    $http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(function (data) {
            $scope.data = data.data;
            console.log("data", $scope.data);
        });

});