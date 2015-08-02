'use strict';
/*@ngInject*/
module.exports = function ($stateParams, searchCreator, $mdToast, $scope) {

    searchCreator.searchByCreatorById($stateParams.creatorId)
        .success(function(response) {
            $scope.creator = response.data.results[0];
            console.log($scope.creator);
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
};
