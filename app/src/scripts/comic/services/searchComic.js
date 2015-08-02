'use strict';
/*@ngInject*/
module.exports = function($http) {

    var service = {};

    service.url = 'http://gateway.marvel.com';
    service.publicKey = 'ef9a36f7829ce13c245d427be87140f1';

    service.searchByComicById = function searchByComicById(value) {
        var url = service.url + '/v1/public/comics/' + value.toString() + '?apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByComic = function searchByComic() {
        var url = service.url + '/v1/public/comics?orderBy=-onsaleDate&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByComics = function searchByComics(value) {
        var url = service.url + '/v1/public/comics?titleStartsWith=' + value + '&apikey=' + service.publicKey;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByCreators = function searchByCreators(value) {
        var url = service.url + '/v1/public/creators?nameStartsWith=' + value + '&orderBy=firstName&apikey=' + service.publicKey;

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