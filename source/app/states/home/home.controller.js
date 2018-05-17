
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, $log, toastr, ApiService ) {

        var vm = $scope.vm = {
            availableList: [],
            rangeSlider: {
                currentValue: 10,
                options: {
                    floor: 0,
                    ceil: 100,
                    step: 10,
                    showTicks: 10,
                    showTicksValues: true,
                    showSelectionBar: true,
                    translate: function(value) {
                        return value + '%';
                    },
                    onChange: function (sliderId, modelValue, highValue, pointerType) {
                        $log.info(sliderId, modelValue, highValue, pointerType);
                    }
                }
            },
            getList: function () {
                /**
                 * resolve object of items
                 */
                ApiService
                    .getList()
                    .then( function ( result ) {
                        vm.availableList = result.data;
                        $log.info(result);
                    })
                    .catch( function ( /*error*/ ) {
                        // TODO: need to remove - it just dummy data
                        vm.availableList.push({
                            date: '2013-05-26T05:00:00.000Z',
                            target: 'some target',
                            status: 'active',
                            comments: 'some comments text'
                        });
                        // NOTE: error doesn't handled because in case of error we predefined data as empty
                    });
            },
            setRangeValue: setRangeValue
        };

        vm.getList();

        function setRangeValue () {
            ApiService
                .setValue({percentage: vm.rangeSlider.currentValue})
                .then( function ( result ) {
                    toastr.success('Current value successfully updated');
                    $log.info(result);
                })
                .catch( function ( /*error*/ ) {
                    // NOTE: error doesn't handled because in case of error we predefined data as empty
                });
        }

    });
