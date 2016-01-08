(function(module) {
try {
  module = angular.module('ionic-floatpicker.templates');
} catch (e) {
  module = angular.module('ionic-floatpicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-floatpicker.html',
    '<div class=24HourTimePickerChildDiv><div class=row><span class="button-small col col-offset-20 col-25"><button type=button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseInt()><i class="icon ion-chevron-up"></i></button><div ng-bind=number.int class="ipBoxes timePickerBoxText"></div><button type=button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseInt()><i class="icon ion-chevron-down"></i></button></span> <label class="col col-10 timePickerColon">:</label> <span class="button-small col col-25"><button type=button class="button button-clear button-small button-dark timePickerArrows marginBottom10" ng-click=increaseFloat()><i class="icon ion-chevron-up"></i></button><div ng-bind=number.float class="ipBoxes timePickerBoxText"></div><button type=button class="button button-clear button-small button-dark timePickerArrows marginTop10" ng-click=decreaseFloat()><i class="icon ion-chevron-down"></i></button></span></div></div>');
}]);
})();
