'use strict';

/**
 * @ngdoc function
 * @name mmmApp.controller:GeoLocationService
 * @description
 * # AboutCtrl
 * Controller of the mmmApp
 */
angular.module('mcyGeolocation')
  .service('GeoLocationService', function ($resource) {
    this.getLocation = function(){
        var ipinfoAPI = $resource('http://ipinfo.io', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
        return ipinfoAPI.get();
    };
  });