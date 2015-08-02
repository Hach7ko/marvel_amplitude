'use strict';

require('../creator/creator');
require('../comic/comic');
require('../subHeader/subHeader');
require('../search/search');

angular.module('marvel_amplitude', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate',
    'ngMaterial',
    'creator',
    'comic',
    'subHeader',
    'search'
])
    .controller('HomeCtrl', require('./controllers/HomeCtrl'))
    .service('events', require('./services/events.js'))
    .service('search', require('./services/search.js'))
    .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
        /**
         * Angular application configuration
         */
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'core/partials/home.html',
                controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise('/home');

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.preferredLanguage('en-EN');
    })
;

