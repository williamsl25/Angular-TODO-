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
8. The reason you include the empty array is so that Angular knows to create an app called ToDoListApp.
9.  bootstrap our angular app within the HTML template in the body tag of index.html
```
ng-app="todoListApp"
```

#### Set up Todo app
  1. in the final app - the label will be used to display the value of the todo. While, the input will be used to edit the value.
  2. create markup in index
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
  3. our todo has a state of true(when you are editing) and false(not editing)

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
  3. this says when user clicks save, fire the helloWorld function
  ```
  <a href="#" ng-click="helloWorld()">Save</a>
  ```
  4. contollers are able to control the state of the app, handle data, and make changes to the UI
  5. $scope is like the area of operation for a controller
  6. inject the controller into the app says where you want the controller to be used

#### Helpful plugins in chrome
  1.  ng-inspector => see all of the scopes and associative variables right on the screen
  2.  Angular JS Batarang => you'll have an entirely new tab in your developer tools angularjs
  3. click on an element In the elements tab
  4. Now I have access to the scope by typing it into the console. Notice when I have the main controller element selected I have access to the hello world method
  5. you don't have access when click on element outside of the controller scope

#### Understanding scope
  1.   the mainCtrl is a child of the root scope with the helloWorld function and coolCtrl with whoAmI function
  2. the helloWorld function in the coolCtrl will overwrite the parent (mainCtrl) helloWorld function and you will see Hello there, this is the coolCtrl function in the console.
  3. the imASibling controller is a sibling of mainCtrl

#### Adding Data using ng-model
  1. we want the user to edit the todo using the input field - do this with the ng-model directive
  ```
  ng-model="todo.name"
  ```
  2. The ng-model directive is set equal to the $scope variable with the same name. For instance, `todo.name` is equal to `$scope.todo.name`.
  3. ng-model as an attribute says bind the value in this directive to an object in the scope => the todo object
  4. open up ng-inspector and see the two way binding - when start typing the todo variable is initialized => every time make a change to the input the variable in the scope changes => constantly updates variables in the scope as the input is changed by the user.
  5. the value of the input is todo.name => todo is an object and we are storing the value of this input on the name key

  6. use ng-model on the checkbox input - bind it to todo.completed
  ```
  ng-model="todo.completed"
  ```
  7. open ng-inspector and when checkbox is checked noticed the todo is completed

  8. Add the todo.name value to html of our application so that when you type the todo it will show up on our todo list=> inside the label add {{todo.name}}

####  use ng-click to change application states
  1. the editing state will be applied when we click the edit button
  ```
  ng-click="editing = !editing"
  ```
  2. this means that when the edit button is clicked set it to the opp of what it was set before => if editing is set to true, set it to false and vise versa

  3. use two other directives to hide and show content based on whether editing is true or false -> input will only show when we are editing
  4. when expression evaluates to true, hide the content on the label
  ```
  ng-hide="editing"
  ```
  5. on the input do the opposite with ng-show = when expression evaluates to true it will show the elements content
  ```
  ng-show="editing"
  ```

#### using ng-repeat to inject html for every data element
  1. NG-repeat is a directive that allows you to repeat HTML content or items in a JavaScript array or an object and we use it to create our to do list.
  2. create an array of fake todos - app.js
  ```
    $scope.todos = [
    {"name": "clean the house"},
    {"name": "clean the dog"},
    {"name": "clean the car"},
    {"name": "laundry"}
  ]
  ```
  3. check and make sure our variable is accessible inside our scope - in index.html add after the delete button
  ```
  {{todos}}
  ```
  4. use ng-repeat as an attribute on another element to create a todo for each element
  ```
  <div ng-repeat="todo in todos">
  ```
#### useing ng-blur and ng-class to improve user experience
  1. when a user is editing the name of a todo, rather than having to click the edit button, all the have to do it click out of the input - use ng-blur - put it in the input
  ```
  <input ng-blur"editing = false;"
  ```
  2. say editing equals false -> The reason we can do this is because the ng-Blur directive fires in only one direction (it fires only when the user is clicking out of an input.)
  3. This is unlike the ng-Click directive, for instance, on the edit button. With the edit button, this uses more of a toggle.

  4. use ng-class bc the buttons are not aligned with the input box they are too high we only want the css to apply when the scope is in editing mode and is visible
  ```
  <div class="item " ng-class="{'editing-item': editing}" ng-repeat="todo in todos">
  ```
#### Use ng-change to set data state
  1. In our application we want to keep track if the user has edited a to do.
  2. add ng-change to our input
  ```
  ng-change="learningNgChange()"
  ```
  3. in app.js add the learningNgChange function
  ```
  $scope.learningNgChange = function() {
    console.log("An input changed");
  };
  ```
  4. it will be fired any time the value of the input changes - now The different directives we're using all worked together.  For instance the expression that is evaluated when NG Change fires does not affect ng blur or ng model. They all work together.

  5. make the ng-change more useful to our project- use NgChange to mark todo.edited as true. Now we'll be able to keep track of which todos have been edited and which have not in my data.
  ```
  <input ng-change="todo.edited = true"
  ```
  6. add css so that we can see which have been edited an set to true -in main.css - do this by adding the edited class to the todo item
  7.  add 'edited': todo.edited

  ```
  <div class="item" ng-class="{'editing-item': editing, 'edited': todo.edited}" ng-repeat="todo in todos">
  ```
#### Services
  1. add service in app.js
  2. Services can be used across your application through dependency injection
  3.  it is  is how Angular makes code available to multiple parts of the application.
  4. mult controllers can use the same service as long as they define the service as a dependency
  5. In order to attach a method to the service - use the THIS key word. - THIS refers to the service Itself. - So when I attach the method hello console to THIS it will be available as a method of the service

  ```
  .service('dataService', function(){
    this.helloConsole = function(){
      console.log("this is the hello console service")
    }
  });
  ```
  6. provide the name of the service as a dependency in the controllers
  ```
  dataService
  ```
  7. now we can access the services method
  ```
  $scope.helloConsole = dataService.helloConsole;
  ```
  8. see it at work when click the save button
  ```
  ng-click="helloConsole()"
  ```
#### Using Services to get Data
  1. move todos to their own file - todos.json into a mock folder
  2. now the mock data will be like making requests to a server
  3. add a GET request in app.js
  4. in order to make the get request to get our mock data we're going to use the HTTP provider. - add it to the service
  ```
  .service('dataService', function($http){...
  ```
  5.  in service
  ```
  this.getTodos = function(callback){
    $http.get('mock/todods.json')
    .then(callback)
  }
  ```
  6. The then method is used to execute code after a response has been received from the server.  1st parameter is a callback

  7. in controller - response.data are the todos
  ```
  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });
  ```
  8. this will send all of the mock todos

#### Using services to save and delete data
