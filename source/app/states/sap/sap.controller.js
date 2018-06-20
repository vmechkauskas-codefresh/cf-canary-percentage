
'use strict';

angular

    .module('layout.sap')

    .controller('sapController', function ( $scope, $log, toastr, ApiSapService ) {

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
            setRangeValue: setRangeValue
        };

        vm.setRangeValue();

        function setRangeValue () {
            ApiSapService
                .setValue({})
                .then( function ( result ) {
                    toastr.success('Current value successfully updated');
                    $log.info(result);
                })
                .catch( function ( /*error*/ ) {
                    // NOTE: error doesn't handled because in case of error we predefined data as empty
                });
        }

    });
