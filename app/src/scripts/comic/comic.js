'use strict';

angular.module('comic', [])
    .controller('ComicCtrl', require('./controllers/ComicCtrl'))
    .controller('PageComicCtrl', require('./controllers/PageComicCtrl'))
    .service('searchComic', require('./services/searchComic'))
    .config(function ($stateProvider) {

        $stateProvider.state('comic', {
            url: '/comic',
            templateUrl: 'comic/partials/comic.html',
            controller: 'ComicCtrl'
        }).state('pageComic', {
            url: '/comic/:comicId',
            templateUrl: 'comic/partials/pageComic.html',
            controller: 'PageComicCtrl',
            resolve: {}
        });
    })
;

