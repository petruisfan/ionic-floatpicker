
##Introduction:

This is a `ionic-floatpicker` bower component which can be used with any Ionic framework's application.


##Prerequisites.

1) node.js, npm, ionic, bower and gulp.

##How to use:

1) In your project repository install the ionic time picker using bower

`bower install ionic-floatpicker --save`

2) Give the path of  `ionic-floatpicker.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic/angularjs js -->
<script src="lib/ionic-floatpicker/dist/ionic-floatpicker.bundle.min.js"></script>
````    

3) In your application module inject the dependency `ionic-floatpicker`, in order to work with the `ionic-floatpicker` component

````javascript
angular.module('modulename', ['ionic', 'ionic-floatpicker']){

}
````

4) Use the below format in your template's corresponding controller

````javascript
$scope.floatPickerObject = {
  inputIndex: 22.01
  stepInt: 1,  //Optional
  stepFloat: 0.01,  //Optional
  maxInt: 999,  //Optional
  titleLabel: '12-hour Format',  //Optional
  setLabel: 'Set',  //Optional
  closeLabel: 'Close',  //Optional
  setButtonType: 'button-positive',  //Optional
  closeButtonType: 'button-stable',  //Optional
  callback: function (val) {    //Mandatory
    floatPickerCallback(val);
  }
};
````

**$scope.floatPickerObject** is the object, that we need to pass to the directive. The properties of this object are as follows.

**a) inputIndex** : value which is used to initialize the picker

**b) stepInt** (Optional) : This the increment / decrement step for the integer part. Default value is `1`

**b) stepFloat** (Optional) : This the increment / decrement step for the floating part. Default value is `0.01`. It also dictates how many decimals are displayed

**c) maxInt** (Optional) : Specifies how high the counter will go

**d) titleLabel** (Optional) : The `Title` for the popup. Default value is `Float Picker`

**e) setLabel** (Optional) : The label for the `Set` button. Default value is `Set`

**f) closeLabel** (Optional) : The label for the `Close` button. Default value is `Close`

**g) setButtonType** (Optional) : This the type of the `Set` button. Default value is `button-positive`. You can give any valid ionic framework's button classes. 

**h) closeButtonType** (Optional) : This the type of the `Close` button. Default value is `button-stable`. You can give any valid ionic framework's button classes.

**i) callback** (Mandatory) : This the callback function, which will get the selected time in to the controller. You can define this function as follows.
````javascript
function floatPickerCallback(val) {
  if (typeof (val) === 'undefined') {
    console.log('Float not selected');
  } else {    
    console.log('Selected float is : ', val);
  }
}
````

5) Then use the below format in your template / html file

````html
<ionic-floatpicker input-obj="timePickerObject">
  <button class="button button-block button-positive overflowShow">
    Select float
  </button>
</ionic-floatpicker>
````

**a) ionic-floatpicker**  is the directive, to which we can pass required vales.

**b) input-obj** (Mandatory) : This is an object. We have to pass an object as shown above.
