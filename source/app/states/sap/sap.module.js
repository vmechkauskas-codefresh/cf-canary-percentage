
'use strict';

angular

    .module('layout.sap', [

    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout.sap', {
            url: '/sap',
            templateUrl: 'app/states/sap/sap.html',
            controller: 'sapController',
            resolve: {}
        });
    });
