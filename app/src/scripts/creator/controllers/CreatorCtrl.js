'use strict';
/*@ngInject*/
module.exports = function (searchCreator, $mdToast, $scope) {

    searchCreator.searchByCreators()
        .success(function(response) {
            $scope.creators = response.data.results;
            console.log($scope.creators);
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
