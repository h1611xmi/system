app.config(function ($routeProvider) {
    $routeProvider.when("/yi",{
        templateUrl:"html/1.html"
    }).when("/er",{
        templateUrl:"html/2.html"
    }).when("/san",{
        templateUrl:"html/3.html"
    }).when("/si",{
        templateUrl:"html/4.html"
    }).when("/home",{
        templateUrl:"html/home.html"
    }).otherwise({
        redirectTo:"/home"
    })
})