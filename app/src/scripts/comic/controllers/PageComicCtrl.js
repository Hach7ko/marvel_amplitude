'use strict';
/*@ngInject*/
module.exports = function ($stateParams, searchComic, $mdToast, $scope) {

    searchComic.searchByComicById($stateParams.comicId)
        .success(function(response) {
            $scope.comic = response.data.results[0];
            console.log($scope.comic);
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
