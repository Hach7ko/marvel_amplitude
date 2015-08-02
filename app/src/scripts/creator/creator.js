'use strict';

angular.module('creator', [])
    .controller('CreatorCtrl', require('./controllers/CreatorCtrl'))
    .controller('PageCreatorCtrl', require('./controllers/PageCreatorCtrl'))
    .service('searchCreator', require('./services/searchCreator'))
    .config(function ($stateProvider) {

        $stateProvider.state('creator', {
            url: '/creator',
            templateUrl: 'creator/partials/creator.html',
            controller: 'CreatorCtrl'
        }).state('pageCreator', {
            url: '/creator/:creatorId',
            templateUrl: 'creator/partials/pageCreator.html',
            controller: 'PageCreatorCtrl',
            resolve: {}
        });
    })
;

