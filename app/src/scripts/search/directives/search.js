'use strict';
/*@ngInject*/
module.exports = function () {
    return {
        controllerAs: 'search',
        restrict: 'E',
        replace: true,
        controller: function ($scope, $state) {
            $scope.search.comics = true;
            $scope.search.creators = true;

            $scope.goToComics = function goToComics() {
                $state.go('comic');
            };

            $scope.goToCreators = function goToCreators() {
                $state.go('creator');
            };

            $scope.goHome = function goHome() {
                $state.go('home');
            };
        },
        templateUrl: 'search/partials/search.html'
    };
};
