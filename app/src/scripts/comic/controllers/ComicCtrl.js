'use strict';
/*@ngInject*/
module.exports = function (searchComic, $mdToast, $scope) {
    $scope.isSearching = false;

    searchComic.searchByComic()
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
};
