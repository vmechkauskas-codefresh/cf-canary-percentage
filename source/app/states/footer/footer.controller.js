
'use strict';

angular

    .module('cf-cp')

    .controller('footerController', function ( $scope, moment, ApiService, config ) {

        var vm = $scope.vm = {
            // next year for copyright license
            nextYear: moment().add(1, 'Y').format('YYYY'),
            // contacts data
            // initialize with empty object in case if it wouldn't resolve object of address info
            address: {},
            phones: {},
            mails: {},
            mailtoLinks: [],
            socials: [{
                name: 'Facebook',
                link: config.facebookLink,
                icon: 'fa-facebook',
            }, {
                name: 'Instagram',
                link: config.instagramLink,
                icon: 'fa-instagram',
            }, {
                name: 'Twitter',
                link: config.twitterLink,
                icon: 'fa-twitter',
            }, {
                name: 'Youtube',
                link: config.youtubeLink,
                icon: 'fa-youtube',
            }, {
                name: 'LInkedin',
                link: config.linkedinLink,
                icon: 'fa-linkedin',
            }],

        };

    });
