/**
 * Author 肖敏.
 * des
 * Date 2017/10/20.
 * Time 16:07.
 */
(function (angular) {
   angular.module('app.music', ['ngRoute'])
        .controller('MusicController', ["$scope", "$http", "$route", "$routeParams", "AppConfig",
            function ($scope, $http, $route, $routeParams, AppConfig) {
                window.doubanMusicCallback = function (data) {
                    if (data.msg) {
                        //返回错误信息
                        $scope.message = data.msg;
                    } else {
                        $scope.music = data;
                        $scope.message = '';
                    }
                };
                //网络请求地址
                // var url = "https://api.douban.com/v2/music?callback=doubanMovieCallback";
                $http.jsonp('https://api.douban.com/v2/music?callback=doubanMusicCallback');

            }]);

})(angular)