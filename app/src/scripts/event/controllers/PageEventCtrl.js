'use strict';
/*@ngInject*/
module.exports = function ($stateParams, searchEvent, $mdToast, $scope, $state, $translate) {
    $scope.isSearching = false;

    searchEvent.getEventById($stateParams.eventId)
        .success(function(response) {
            $scope.event = response.data.results[0];
        })
        .error(function() {
            var toast = $mdToast.simple()
                .content('Erreur lors de l\'appel.')
                .action('Réessayer')
                .highlightAction(false)
                .position('top right');
            $mdToast.show(toast).then(function() {
            });
        });

    $scope.changeLanguage = function changeLanguage(language) {
        $translate.use(language);
    };

    $scope.searchBy = function searchBy(value) {

        value = value.replace(/\s+/g, '+');

        searchEvent.searchByComics(value)
            .success(function(response) {
                $scope.searchResponseComics = response.data.results;

                $scope.isSearching = true;
            })
            .error(function() {
                var toast = $mdToast.simple()
                    .content('Erreur lors de l\'appel.')
                    .action('Réessayer')
                    .highlightAction(false)
                    .position('top right');
                $mdToast.show(toast).then(function() {
                    $scope.searchBy(value);
                });
            });

        searchEvent.searchByCreators(value)
            .success(function(response) {
                $scope.searchResponseCreators = response.data.results;

                $scope.isSearching = true;
            })
            .error(function() {
                var toast = $mdToast.simple()
                    .content('Erreur lors de l\'appel.')
                    .action('Réessayer')
                    .highlightAction(false)
                    .position('top right');
                $mdToast.show(toast).then(function() {
                    $scope.searchBy(value);
                });
            });
    };

    $scope.goHome = function goHome() {
        $state.go('home');
    };

    $scope.goCreator = function goCreator(creator) {
        $state.go('pageCreator', {
            creatorId: creator
        });
    };
};
