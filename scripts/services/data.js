'use strict';

// SERVICES
angular.module("todoListApp")
  .service('dataService', function($http){
    this.getTodos = function(callback){
      $http.get('/mock/todos.json')
      .then(callback);
    };

    this.deleteTodo = function(todo){
      console.log("the "+ todo.name + " todo has been deleted")
    };

    this.saveTodo = function(todo){
      console.log("the "+ todo.name + " todo has been saved")
    };


  });
