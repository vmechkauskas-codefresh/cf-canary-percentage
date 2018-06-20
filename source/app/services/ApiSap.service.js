
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
                /*
               $timeout(function () {
                   deferred.resolve( {data: [
                           {
                               date: '2013-05-26T05:00:00.000Z',
                               target: 'some target',
                               status: 'active',
                               comments: 'some comments text'
                           }
                       ]} );
               }, 0.5* 1000);
               */
                // GET /api/canary/routetable
                Restangular
                    .one('canary')
                    .one('routetable')
                    .get()
                    .then(function (success) {
                        deferred.resolve(success);
                    })
                    .catch(deferred.reject.bind(deferred));

                return deferred.promise;
            },
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
                /*
                $timeout(function () {
                    deferred.resolve( {result: 'ok'} );
                }, 0.5* 1000);
                */
                // POST /api/canary/percentage
                Restangular
                    .one('canary')
                    .all('percentage')
                    .post( value )
                    .then(function ( result ) {
                        deferred.resolve( result );
                    })
                    .catch( deferred.reject.bind(deferred) );
                return deferred.promise;
            },
        };
    });
