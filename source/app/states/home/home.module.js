
'use strict';

angular

    .module('layout.home', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.home', {
            url: '/home',
            templateUrl: 'app/states/home/home.html',
            controller: 'homeController',
            resolve: {}
        });
    });
