'use strict';
/*@ngInject*/
module.exports = function (searchCreator, $mdToast, $scope) {
    $scope.offset = 20;

    $scope.searchCreators = function(offset) {
        searchCreator.searchByCreators(offset)
            .success(function(response) {
                if($scope.creators != undefined) {
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

    $scope.searchCreators($scope.offset);
};
