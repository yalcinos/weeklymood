angular.module('Weekly-Moods')
    .component('footerComponent',{
        controller: footerController,
        templateUrl:'components/footerComponent/footer.html'
    });
function footerController($scope) {
    $scope.title = "burasi Footer Beybilo"
}
