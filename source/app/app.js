
'use strict';

angular
    /**
     * default bootstraping of angular application
     * structure dependencies application
     */
    .module('cf-cp', [
        'ui.router',
        'restangular',
        'ui.bootstrap',
        'toastr',
        'cf-cp.layout',
        'angularMoment',
        'ngMap',
        'ui.mask',
        'ui.validate',
        'rzModule'
    ])

    .config( function ( $urlRouterProvider, $logProvider, $locationProvider, RestangularProvider, config ) {
        //
        $locationProvider.html5Mode(true);
        // OTHERWICE
        $urlRouterProvider.otherwise('/home');
        // Do I need to have a log.debug message visible ?
        $logProvider.debugEnabled(!config.production);

        // Do I need customize a request base url ?
        // RestangularProvider.setBaseUrl(config.apiPath);
        // Do I need customize a request headers for application ?
        // RestangularProvider.setDefaultHeaders({'custom-header': 'best request'});

    })

    .config( function ( RestangularProvider, config ) {

        // set api path by environment
        RestangularProvider.setBaseUrl(config.serviceUrl+config.apiPath);
        // set custom header to all request
        RestangularProvider.setDefaultHeaders({ 'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjFkMWVlOGMzNGIzNjAwMDFlYzVkY2YiLCJhY2NvdW50SWQiOiI1YjFkMWVlOGMzNGIzNjAwMDFlYzVkZDAiLCJpYXQiOjE1Mjk1MTI2MzMsImV4cCI6MTUzMjEwNDYzM30.117unzSlMF8HqszqA8Q0LxJ2TNEN4JdVcPKOhH3R3_k' });
        RestangularProvider.setResponseExtractor(function ( response ) {
            is.object( response )&&(response.self = angular.copy(response));
            return response;
        });
    })

    .run( function ( $rootScope, $state, $log, config ) {
        // Do I need to state parameters visible in the html view ?
        $rootScope.$state = $state;
        $rootScope.customerTitle = config.customerTitle;
        // log a configuration of aplication
        $log.debug('app config\n', config);

        if ( !config.production ) {
            var log = $log.error.bind($log, 'ui-router => $stateChangeError:\n');
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                log.apply(null, Array.prototype.slice.call(arguments) );
            });
        }
    });
