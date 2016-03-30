// main controller
// This makes sure the file is interpreted in a strict mode by the JavaScript interpreter, and it can save you a ton of errors.

'use strict';

angular.module('todoListApp')
  .controller('mainCtrl', function($scope, dataService) {

    dataService.getTodos(function(response){
      var todos = response.data;
      console.log(response.data);
      $scope.todos = todos;
    });

    $scope.addTodo = function(){
      var todo = {name: "This is a new todo"};
      $scope.todos.unshift(todo);
    };

    // $scope.learningNgChange = function() {
    //   console.log("An input changed");
    // };
    $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
    // $index will delete it from the DOM - pass $index as a second parameter here as well as in the html

    $scope.saveTodos = function(){
      var filteredTodos = $scope.todos.filter(function(todo){
        if(todo.edited){
          //if the todo has been edited return it
          return todo;
        };
      })
      dataService.saveTodos(filteredTodos);
    };

})
