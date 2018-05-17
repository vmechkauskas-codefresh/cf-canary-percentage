
'use strict';

angular
    // as a deep for root module
    .module('cf-cp')
    // service injector name
    .service('ApiService', function ( $q, $timeout, Restangular ) {
        // private methods of service
        var Service = null;
        Service; // no-unused-vars =)

        return Service = {
            // public methods
            /**
             * @description to get actual list from server side
             * @example ApiService.getList().then(...).catch(...);
             * @returns { Promise }
             * @function ApiService.getList
             * @public
             */
            getList: function () {
                var deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve( {data: [
                            {
                                date: '2013-05-26T05:00:00.000Z',
                                target: 'target',
                                status: 'active',
                                comments: 'some comments text'
                            }
                        ]} );
                }, 0.5* 1000);
                return deferred.promise;
            },
            /**
             * @description to set actual value
             * @example ApiService.setValue().then(...).catch(...);
             * @returns { Promise }
             * @function ApiService.setValue
             * @public
             */
            setValue: function (value) {
                var deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve( {result: 'ok'} );
                }, 0.5* 1000);
                return deferred.promise;
            },
        };
    });
