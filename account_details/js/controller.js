app.controller("Aaa",function ($scope,$http,$timeout) {
    $http.get("data/data.json").success(function (data) {
        $scope.data=data.badian;
    });
})
