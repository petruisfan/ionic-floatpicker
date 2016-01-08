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
                scope.stepFloat = scope.inputObj.stepFloat ? scope.inputObj.stepFloat : 1;
                scope.maxInt = scope.inputObj.maxInt ? scope.inputObj.maxInt : 99999;       // max integer value
                scope.maxFloat = scope.inputObj.maxFloat ? scope.inputObj.maxFloat : 99;    // max floating value
                
                scope.titleLabel = scope.inputObj.titleLabel ? scope.inputObj.titleLabel : 'Float Picker';
                scope.setLabel = scope.inputObj.setLabel ? scope.inputObj.setLabel : 'Set';
                scope.closeLabel = scope.inputObj.closeLabel ? scope.inputObj.closeLabel : 'Close';
                scope.setButtonType = scope.inputObj.setButtonType ? scope.inputObj.setButtonType : 'button-positive';
                scope.closeButtonType = scope.inputObj.closeButtonType ? scope.inputObj.closeButtonType : 'button-stable';

                scope.number = {int: scope.inputIndex / 1, float: scope.inputIndex % 1 };

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
                    if (scope.number.float != scope.maxFloat) {
                        scope.number.float += scope.inputObj.stepFloat;
                    } else {
                        scope.number.float = 0;
                    }
                };

                /**
                 * Decreasing the float
                 */
                scope.decreaseFloat = function () {
                    if (scope.number.float > 0) {
                        scope.number.float -= scope.stepFloat;
                    } else {
                        scope.number.float = scope.maxFloat;
                    }
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
                            },
                            {
                                text: scope.setLabel,
                                type: scope.setButtonType,
                                onTap: function (e) {
                                    var result = parseFloat(scope.number.int + "." + scope.number.float);
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
