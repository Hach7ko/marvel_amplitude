'use strict';
/*@ngInject*/
module.exports = function($http) {

    var service = {};

    service.url = 'http://gateway.marvel.com';
    service.publicKey = 'ef9a36f7829ce13c245d427be87140f1';

    service.getEvents = function getEvents() {

        var url = service.url + '/v1/public/events?orderBy=-startDate&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
;            });
    };

    return service;
};