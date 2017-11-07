/**
 * Author 肖敏.
 * des
 * Date 2017/10/20.
 * Time 16:06.
 */
(function (angular) {
    angular.module("app.book",['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when("/book",{
                templateUrl:'book/view.html',
                controller:'BookController'
            });

        }])
        .controller('BookController',[function () {

        }]);
})(angular)