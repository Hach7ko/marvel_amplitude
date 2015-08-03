'use strict';
/*@ngInject*/
module.exports = function () {
    return {
        controllerAs: 'subHeader',
        restrict: 'E',
        replace: true,
        controller: function ($scope, $state, $translate) {
            $scope.goToComics = function goToComics() {
                $state.go('comic');
            };

            $scope.goToCreators = function goToCreators() {
                $state.go('creator');
            };

            $scope.goToEvents = function goToEvents() {
                $state.go('events');
            };

            $scope.goHome = function goHome() {
                $state.go('home');
            };

            $scope.changeLanguage = function changeLanguage(language) {
                $translate.use(language);
            };
        },
        templateUrl: 'subHeader/partials/subHeader.html'
    };
};
