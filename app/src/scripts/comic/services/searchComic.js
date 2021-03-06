'use strict';
/*@ngInject*/
module.exports = function($http, md5) {

    var service = {};

    service.url = 'http://gateway.marvel.com';
    service.publicKey = 'ef9a36f7829ce13c245d427be87140f1';
    service.privateKey = 'cf3efa3192633bc25e4f0d3747c209b3900c9e97';

    service.searchByComicById = function searchByComicById(value) {

        var ts = Date.now().toString();
        var hash = md5.createHash(ts+service.privateKey+service.publicKey);
        var url = service.url + '/v1/public/comics/' + value.toString() + '?ts=' + ts + '&apikey=' + service.publicKey + '&hash=' + hash;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByComic = function searchByComic(offset) {
        var ts = Date.now().toString();
        var hash = md5.createHash(ts+service.privateKey+service.publicKey);
        var url = service.url + '/v1/public/comics?orderBy=-onsaleDate&offset=' + offset.toString() + '&ts=' + ts + '&apikey=' + service.publicKey + '&hash=' + hash;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByComics = function searchByComics(value) {
        var ts = Date.now().toString();
        var hash = md5.createHash(ts+service.privateKey+service.publicKey);
        var url = service.url + '/v1/public/comics?titleStartsWith=' + value + '&ts=' + ts + '&apikey=' + service.publicKey + '&hash=' + hash;

        return $http.get(url)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            });
    };

    service.searchByCreators = function searchByCreators(value) {
        var ts = Date.now().toString();
        var hash = md5.createHash(ts+service.privateKey+service.publicKey);
        var url = service.url + '/v1/public/creators?nameStartsWith=' + value + '&orderBy=firstName&ts=' + ts + '&apikey=' + service.publicKey + '&hash=' + hash;

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