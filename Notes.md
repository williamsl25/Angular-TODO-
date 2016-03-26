## Todo App - Angular

#### Set up angular
1. bower init
2. bower install angular --save
3. link style sheet in index.html
4. include angular script tag
5. create scripts folder and touch app.js - main file for our Ng APP
6. inclue app.js script under angular script
7. in app.js use angular's module method - 1st parameter is the name of the app, second parameter is an empty array
```
angular.module("todoListApp", []);
```
  * The reason you include the empty array is so that Angular knows to create an app called ToDoListApp.
8.  bootstrap our angular app within the HTML template in the body tag of index.html
```
ng-app="todoListApp"
```

#### Set up Todo app
* in the final app - the label will be used to display the value of the todo. While, the input will be used to edit the value.
1. create markup in index
```
<div class="list">
  <input type="checkbox">
  <label class="editing-label">a sample todo</label>
  <input class="editing-label"type="text">
  <div class="actions">
    <a href="#">Edit</a>
    <a href="#">Save</a>
    <a href="#" class="Delete">Delete</a>
  </div>
</div>

```
2. our todo has a state of true(when you are editing) and false(not editing)
#### create controller
1. app.js
```
angular.module("toDoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello there! This is the helloWorld controller function in the mainCtrl!");
    };
  });
```
2. index.html -inject the controller
```
<div ng-controller="mainCtrl" class="list">
```
* this says when user clicks save, fire the helloWorld function
```
<a href="#" ng-click="helloWorld()">Save</a>
```
3. contollers are able to control the state of the app, handle data, and make changes to the UI
4. $scope is like the area of operation for a controller
5. inject the controller into the app says where you want the controller to be used

#### Helpful plugins in chrome
1.  ng-inspector => see all of the scopes and associative variables right on the screen
2.  Angular JS Batarang => you'll have an entirely new tab in your developer tools angularjs
* click on an element In the elements tab
* Now I have access to the scope by typing it into the console.
Notice when I have the main controller element selected I have access to the hello world method
* you don't have access when click on element outside of the controller scope

#### Understanding scope
1.   the mainCtrl is a child of the root scope with the helloWorld function and coolCtrl with whoAmI function
2. the helloWorld function in the coolCtrl will overwrite the parent (mainCtrl) helloWorld function and you will see Hello there, this is the coolCtrl function in the console.
3. the imASibling controller is a sibling of mainCtrl

#### Adding Data using ng-model
