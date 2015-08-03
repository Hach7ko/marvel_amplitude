'use strict';
/*@ngInject*/
module.exports = function ($scope, $translate, events, search, $mdToast, $mdUtil, $mdSidenav, $state) {
    $scope.showModal = true;
    $scope.isSearching = false;

    $scope.closeModal = function closeModal() {
        $scope.showModal = false;
    };

    $scope.changeLanguage = function changeLanguage(language) {
        $translate.use(language);
    };

    $scope.searchBy = function searchBy(value) {

        value = value.replace(/\s+/g, '+');

        search.searchByComics(value)
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

       search.searchByCreators(value)
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

   events.getEvents()
        .success(function(response) {
            $scope.events = response.data.results;
        })
        .error(function() {

        });

    $scope.goCreator = function goCreator(creator) {
        $state.go('pageCreator', {
            creatorId: creator.id
        });
    };

    $scope.goComic = function goComic(comic) {
        $state.go('pageComic', {
            comicId: comic.id
        });
    };

    $scope.goEvent = function goEvent(event) {
        $state.go('pageEvent', {
            eventId: event.id
        });
    };

    $scope.goHome = function goHome() {
        $state.go('home');
    };

    $scope.toggleLeft = buildToggler('left');

    $scope.close = function () {
        $mdSidenav('left').close();
    };

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle();
        },300);
        return debounceFn;
    }
};
