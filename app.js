/**
 * Author 肖敏.
 * des
 * Date 2017/10/19.
 * Time 21:58.
 */
var app = angular.module("myapp",[
    "ngRoute",
    "app.movie",
    "app.book",
    "app.music"
]);

//URL配置
app.constant("AppConfig",{
    page_size:15,
    movies_api:'https://api.douban.com/v2/'
});
//配置路由
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/movie',{
            controller:'MovieController',
            templateUrl:'movie/view.html'
        })
        .when('/book',{
            controller:'BookController',
            templateUrl:'book/view.html'
        })
        .when('/music',{
            controller:'MusicController',
            templateUrl:'music/view.html'
        })
        .otherwise({
            redirectTo:'/movie/view.html'
        })
}]);
