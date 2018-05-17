
'use strict';

angular
    /**
     * default bootstraping of angular application
     * structure dependencies application
     */
    .module('cf-cp.layout', [
        'layout.home',
    ])

    .config( function ( $stateProvider ) {

        $stateProvider.state('layout', {
            url: '',
            abstract: true,
            views: {
                'main': {
                    templateUrl: 'app/states/layout.html',
                    controller: 'layoutController'
                },
                'footer': {
                    templateUrl: 'app/states/footer/footer.html',
                    controller: 'footerController'
                }
            },
            resolve: {
            }
        });

    });
