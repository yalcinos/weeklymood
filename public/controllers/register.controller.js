angular.module('weeklyMood')
    .controller('RegisterController', registerController);

function registerController($scope, $rootScope, $location, DataService) {
    $scope.user = {};
    $rootScope.flag = false;

    $scope.userRegister = function () {
        DataService.userRegister($scope.user, function (response) {
            $location.path('/login');
        });
    };
}
