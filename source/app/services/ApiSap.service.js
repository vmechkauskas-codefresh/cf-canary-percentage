
'use strict';

angular
    // as a deep for root module
    .module('cf-cp')
    // service injector name
    .service('ApiSapService', function ( $q, $timeout, Restangular ) {
        // private methods of service
        var Service = null;
        Service; // no-unused-vars =)

        return Service = {
            // public methods
            /**
             * @description to set actual value
             * @example ApiService.setValue().then(...).catch(...);
             * @param { Object } value - data percentage value
             * @returns { Promise }
             * @function ApiService.setValue
             * @public
             */
            setValue: function (value) {
                var deferred = $q.defer();
                // POST /api/builds/5b1f7a8129b6d0236a24e532
                Restangular
                    .one('builds')
                    .all('5b1f7a8129b6d0236a24e532')
                    .post( {'serviceId':'5b1f7a8129b6d0236a24e532','type':'build','repoOwner':'ShimiT','branch':'master','repoName':'bookshop'} )
                    .then(function ( result ) {
                        deferred.resolve( result );
                    })
                    .catch( deferred.reject.bind(deferred) );
                return deferred.promise;
            },
        };
    });
