'use strict';
/*@ngInject*/
module.exports = function (searchEvent, $mdToast, $scope, $state, $translate) {
    $scope.isSearching = false;
    $scope.offset = 20;

    $scope.searchEvents = function searchEvents(offset) {
        searchEvent.getEvents(offset)
            .success(function(response) {

                if($scope.events !== undefined) {
                    for(var data in response.data.results) {
                        $scope.events[$scope.events.length] = response.data.results[data];
                    }
                } else {
                    $scope.events = response.data.results;
                }
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
    };

    $scope.load = function load() {
        $scope.offset+=20;
        $scope.searchEvents($scope.offset);
    };

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

    $scope.goEvent = function goEvent(event) {
        $state.go('pageEvent', {
            eventId: event.id
        });
    };

    $scope.searchEvents($scope.offset);
};
