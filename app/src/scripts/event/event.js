'use strict';

angular.module('event', [])
    .controller('EventCtrl', require('./controllers/EventCtrl'))
    .controller('PageEventCtrl', require('./controllers/PageEventCtrl'))
    .service('searchEvent', require('./services/searchEvent'))
    .config(function ($stateProvider) {

        $stateProvider.state('events', {
            url: '/event',
            templateUrl: 'event/partials/event.html',
            controller: 'EventCtrl'
        }).state('pageEvent', {
            url: '/event/:eventId',
            templateUrl: 'event/partials/pageEvent.html',
            controller: 'PageEventCtrl',
            resolve: {}
        });
    })
;

