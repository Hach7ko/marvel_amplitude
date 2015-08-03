'use strict';
/*@ngInject*/
module.exports = function (searchCreator, $mdToast, $scope, $state) {
    $scope.offset = 20;
    $scope.isSearching = false;


    $scope.searchCreators = function(offset) {
        searchCreator.searchByCreators(offset)
            .success(function(response) {
                if($scope.creators !== undefined) {
                    for(var data in response.data.results) {
                        $scope.creators[$scope.creators.length] = response.data.results[data];
                    }
                } else {
                    $scope.creators = response.data.results;
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
        $scope.searchCreators($scope.offset);
    };

    $scope.goCreator = function goCreator(creator) {
        $state.go('pageCreator', {
            creatorId: creator.id
        });
    };

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

    $scope.searchCreators($scope.offset);
};
