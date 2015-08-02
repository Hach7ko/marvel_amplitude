'use strict';
/*@ngInject*/
module.exports = function($http) {

    var service = {};

    service.url = 'http://gateway.marvel.com';
    service.publicKey = 'ef9a36f7829ce13c245d427be87140f1';

    service.searchByCreatorById = function searchByCreatorById(value) {
        var url = service.url + '/v1/public/creators/' + value.toString() + '?apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.getCreatorComics = function getCreatorComics(value) {
        var url = service.url + '/v1/public/creators/' + value.toString() + '/comics?orderBy=-onsaleDate&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.getCreatorSeries = function getCreatorSeries(value) {
        var url = service.url + '/v1/public/creators/' + value.toString() + '/series?orderBy=-startYear&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.getCreatorStories = function getCreatorStories(value) {
        var url = service.url + '/v1/public/creators/' + value.toString() + '/stories?orderBy=-modified&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    return service;
};