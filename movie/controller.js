/**
 * Author 肖敏.
 * des
 * Date 2017/10/20.
 * Time 16:07.
 */
(function (angular) {
    angular.module("app.movie",[
        mov
    ])
        .controller('MovieController',['$scope', '$http', '$route', '$routeParams', 'AppConfig',
            function($scope, $http, $route, $routeParams, AppConfig) {

                // 开始时通过loading标识为正在加载
                $scope.loading = true;
                // 每页大小
                $scope.size = AppConfig.page_size;

                $scope.currentPage = $routeParams.page || 1;
                $scope.type = $routeParams.type || 'in_theaters';
                if ($scope.type === 'search') {
                    $scope.type += '?q=' + $routeParams.q + '&';
                    console.log($scope.type);
                } else {
                    $scope.type += '?';
                }

                $scope.start = $scope.size * ($scope.currentPage - 1);
                $scope.totalItems = 100000;
                // 将回到函数挂到window对象下
                window.doubanMovieCallback = function(data) {
                    if (data.msg) {
                        // 有错误信息产生；
                        $scope.message = data.msg;
                    } else {
                        $scope.message = '';
                        $scope.movies = data;
                        $scope.totalItems = data.total;
                    }
                    $scope.loading = false;
                };

                // var url = AppConfig.movies_api + $scope.type + 'callback=doubanMovieCallback&count=' + $scope.size + '&start=' + $scope.start;
                var url = "https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback";
                $http.jsonp(url).error(function() {
                });

                $scope.$watch('currentPage', function(now, old) {
                    if (now !== old) {
                        $route.updateParams({
                            page: now
                        });
                    }
                });
            }
        ]);

})(angular)
