// CONTROLLER
angular.module("toDoListApp", [])
  .controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response){
      console.log(response.data);
      $scope.todos = response.data;
    });

    // $scope.learningNgChange = function() {
    //   console.log("An input changed");
    // };

  })


// SERVICES
  .service('dataService', function($http){
    this.helloConsole = function(){
      console.log("this is the hello console service")
    };
    this.getTodos = function(callback){
      $http.get('mock/todos.json')
      .then(callback)
    }
  });
  // mainCtrl is a child of the root scope with the helloWorld function and coolCtrl with whoAmI function

//   .controller('coolCtrl', function($scope){
//     $scope.whoAmI = function(){
//       console.log("Hello there, this is the coolCtrl function")
//     };
// // the helloWorld below will overwrite the parent (mainCtrl) helloWorld function and you will see Hello there, this is the coolCtrl function in the console.
//
//     $scope.helloWorld = function() {
//       console.log("This is not the mainCtrl!");
//     }
//
//   })
//   .controller('imASibling', function($scope){
//     $scope.foobar = 1234;
// // sibling of mainCtrl
//
//   });
