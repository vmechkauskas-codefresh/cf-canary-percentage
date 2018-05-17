
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, ApiService ) {

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
                        console.log(sliderId, modelValue, highValue, pointerType)
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
                    })
                    .catch( function ( /*error*/ ) {
                        // NOTE: error doesn't handled because in case of error we predefined data as empty
                    });
            },
            setRangeValue: setRangeValue
        };

        vm.getList();

        function setRangeValue (value) {

        }

    });
