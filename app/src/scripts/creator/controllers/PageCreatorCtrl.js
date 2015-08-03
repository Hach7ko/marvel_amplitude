'use strict';
/*@ngInject*/
module.exports = function ($stateParams, searchCreator, $mdToast, $scope, $state) {
    $scope.isSearching = false;


    searchCreator.searchByCreatorById($stateParams.creatorId)
        .success(function(response) {
            $scope.creator = response.data.results[0];
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

    searchCreator.getCreatorComics($stateParams.creatorId)
        .success(function(response) {
            $scope.comics = response.data.results;
            console.log($scope.comics);
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

    searchCreator.getCreatorSeries($stateParams.creatorId)
        .success(function(response) {
            $scope.series = response.data.results;
            console.log($scope.series);
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

    searchCreator.getCreatorStories($stateParams.creatorId)
        .success(function(response) {
            $scope.stories = response.data.results;
            console.log($scope.stories);
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

    $scope.searchBy = function searchBy(value) {

        value = value.replace(/\s+/g, '+');

        searchCreator.searchByComics(value)
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

        searchCreator.searchByCreators(value)
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

    $scope.goComic = function goComic(comic) {
        $state.go('pageComic', {
            comicId: comic.id
        });
    };
};
