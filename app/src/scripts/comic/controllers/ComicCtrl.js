'use strict';
/*@ngInject*/
module.exports = function (searchComic, $mdToast, $scope, $state) {
    $scope.isSearching = false;
    $scope.offset = 20;

    $scope.searchComics = function searchComics(offset) {
        searchComic.searchByComic(offset)
            .success(function(response) {

                if($scope.comics != undefined) {
                    for(var data in response.data.results) {
                        $scope.comics[$scope.comics.length] = response.data.results[data];
                    }
                } else {
                    $scope.comics = response.data.results;
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
        $scope.searchComics($scope.offset);
    };

    $scope.changeLanguage = function changeLanguage(language) {
        $translate.use(language);
    };

    $scope.searchBy = function searchBy(value) {

        value = value.replace(/\s+/g, '+');

        searchComic.searchByComics(value)
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

        searchComic.searchByCreators(value)
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

    $scope.goComic = function goComic(comic) {
        $state.go('pageComic', {
            comicId: comic.id
        });
    };

    $scope.searchComics($scope.offset);
};
