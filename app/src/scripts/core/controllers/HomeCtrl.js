'use strict';
/*@ngInject*/
module.exports = function ($scope, $translate, events, search) {
    $scope.showModal = true;
    $scope.isSearching = false;

    $scope.closeModal = function closeModal() {
        $scope.showModal = false;
    };

    $scope.changeLanguage = function changeLanguage(language) {
        $translate.use(language);
    };

    $scope.searchBy = function searchBy(value) {
        /*search.searchByComics(value)
            .success(function(response) {
                $scope.searchResponseComics = response.data.results;
                console.log($scope.searchResponseComics);

                $scope.isSearching = true;
            })
            .error(function() {

            });*/

        search.searchByCreators(value)
            .success(function(response) {
                $scope.searchResponseCreators = response.data.results;
                console.log($scope.searchResponseCreators);

                $scope.isSearching = true;
            })
            .error(function() {

            });
    };

    events.getEvents()
        .success(function(response) {
            $scope.events = response.data.results;
            console.log($scope.events);
        })
        .error(function() {

        });
};
