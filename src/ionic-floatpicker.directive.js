//By Rajeshwar Patlolla
//https://github.com/rajeshwarpatlolla

(function () {
    'use strict';

    angular.module('ionic-floatpicker')
        .directive('ionicFloatpicker', ionicFloatpicker);

    ionicFloatpicker.$inject = ['$ionicPopup'];
    function ionicFloatpicker($ionicPopup) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                inputObj: "=inputObj"
            },
            link: function (scope, element) {
                //
                //set up base variables and options for customization
                //
                scope.inputIndex = scope.inputObj.inputIndex ? scope.inputObj.inputIndex : 0.00;
                scope.stepInt = scope.inputObj.stepInt ? scope.inputObj.stepInt : 1;
                scope.stepFloat = scope.inputObj.stepFloat ? scope.inputObj.stepFloat : 0.01;
                scope.maxInt = scope.inputObj.maxInt ? scope.inputObj.maxInt : 99999;       // max integer value

                scope.titleLabel = scope.inputObj.titleLabel ? scope.inputObj.titleLabel : 'Float Picker';
                scope.setLabel = scope.inputObj.setLabel ? scope.inputObj.setLabel : 'Set';
                scope.closeLabel = scope.inputObj.closeLabel ? scope.inputObj.closeLabel : 'Close';
                scope.setButtonType = scope.inputObj.setButtonType ? scope.inputObj.setButtonType : 'button-positive';
                scope.closeButtonType = scope.inputObj.closeButtonType ? scope.inputObj.closeButtonType : 'button-stable';

                //
                // Some sanity checks
                //
                if (scope.stepFloat >= 1 || scope.stepFloat <= 0 ) {
                    throw new Error("stepFloat must be a number between 0 and 1" );
                }
                var floatDecimals = scope.stepFloat.toString().split(".")[1].length;
                /**
                 * Returned a fixed decimal number, based on number of decimals from increment
                 */
                var getFloatFromNumber = function(number) {
                    return +(number - Math.floor(number)).toFixed(floatDecimals);
                };
                /**
                 * Return a string representation of the decimal, without 0.
                 */
                var getFloatLabel = function(number) {
                    return number.toString().split(".")[1].slice(0, floatDecimals);
                };

                scope.number = {
                    int: Math.trunc( scope.inputIndex ),
                    float: getFloatFromNumber(scope.inputIndex),
                    floatLabel: getFloatLabel(scope.inputIndex)
                };

                /**
                 * Increasing the int
                 */
                scope.increaseInt = function () {
                    if (scope.number.int != scope.maxInt) {
                        scope.number.int += scope.stepInt;
                    } else {
                        scope.number.int = 0;
                    }                    
                };
                /**
                 * Decreasing the int
                 */
                scope.decreaseInt = function () {
                    if (scope.number.int > 0) {
                        scope.number.int -= scope.stepInt;
                    } else {
                        scope.number.int = scope.maxInt;
                    }
                };
                /**
                 * Increasing the float
                 */
                scope.increaseFloat = function () {
                    var sum = +scope.number.float + +scope.stepFloat;
                    if ( sum < 1) {
                        scope.number.float = sum.toFixed(floatDecimals) ;
                    } else {
                        scope.number.float = getFloatFromNumber(sum);
                    }
                    scope.number.floatLabel = getFloatLabel(scope.number.float);
                };
                /**
                 * Decreasing the float
                 */
                scope.decreaseFloat = function () {
                    var dif = +scope.number.float - +scope.stepFloat;

                    if (dif > 0) {
                        scope.number.float = dif.toFixed(floatDecimals) ;
                    } else {
                        scope.number.float = getFloatFromNumber(dif);
                    }
                    scope.number.floatLabel = getFloatLabel(scope.number.float);
                };
                /**
                 * onclick of the button
                 */
                element.on("click", function () {
                    $ionicPopup.show({
                        templateUrl: 'ionic-floatpicker.html',
                        title: scope.titleLabel,
                        subTitle: '',
                        scope: scope,
                        buttons: [ {
                                text: scope.closeLabel,
                                type: scope.closeButtonType,
                                onTap: function (e) {
                                    scope.inputObj.callback(undefined);
                                }
                            }, {
                                text: scope.setLabel,
                                type: scope.setButtonType,
                                onTap: function (e) {
                                    var decimals = (''+scope.number.float).split(".")[1];

                                    var result = parseFloat(scope.number.int + "." + decimals );
                                    scope.inputObj.callback(result);
                                }
                            }
                        ]
                    });

                });
            }
        };
    }

})();
