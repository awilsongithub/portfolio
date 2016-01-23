// angular module construction named app, specifically chirpApp
// [ ] holds dependencies
// ngRoute is an additional script from the cdn
var app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($rootScope){
   // declare some rootScope variables.
   // all ctrlrs have access to $rootScope
   $rootScope.authenticated = false; // by default
   $rootScope.current_user = '';

   $rootScope.signout = function(){
      // auth/signout calls logout() = mongoose method? that clears credentials?
      $http.get('auth/signout');
      $rootScope.authenticated = false;
      $rootScope.current_user = '';
   };
});

// ANGULAR ROUTEPROVIDER
// WIRES UP ROUTES, CTRLRS, TEMPLATES
// so we don't need call controllers frorm the view file
app.config(function($routeProvider){
   $routeProvider
   // post timeline
   .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
   })
   // login
   .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
   })
   // signup
   .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
   });
});

// MAINCONTROLLER
// is a function attaching a model onto $scope
// items passed with $scope are in the scope of the view templates
app.controller('mainController', function($scope, postService){
   // attach variables onto our $scope (post objects, posts array)
   $scope.posts = postService.query();
   $scope.newPost = {created_by: '', text: '', created_at: ''};

   postService.getAll().success(function(data){
      $scope.posts = data;
   });

   // POST CREATION FORM CALLS THIS FUNCTION
   // THIS NEW VERSION USES CURRENT_USER FROM THE LOGIN FUNCTION
   // INSTEAD OF USERNAME VALUE FROM FORM PARAMETERS 
   // COMMENTED OUT OLD $SCOPE.POST FUNCTION PER MOD 5 NEW ONE (BELOW)
   $scope.post = function() {
      $scope.newPost.created_by = $rootScope.current_user;
      $scope.newPost.created_at = Date.now();

      postService.save($scope.newPost, function(){
         $scope.posts = postService.quer();
         $scope.newPost = {created_by: '', text: '', created_at: ''};
      });
   };

   // create post and push onto posts array
   // called on form submit, adds timestamp, pushes onto post array
//    $scope.post = function(){
//       $scope.newPost.created_at = Date.now();
//       $scope.posts.push($scope.newPost);
//       // resest newPost
//       $scope.newPost = {created_by: '', text: '', created_at: ''};
//   };
// });


// RANDOM REMINDER: WHEN A PARAM PASSED > FUNCTION, IT'S PASSED TO
// THE CODE BLOCK SCOPE OF THE FUNCTION. EX: doubleIt(x){ return x*2; }
// http.get all posts from api, put in factory object
app.factory('postService', function($http){
   var baseUrl = 'api/posts';
   var factory = {};
   factory.getAll = function(){
      return.$http.get(baseUrl);
   };
   return factory;
});

app.factory('postService', function($resource){
   return $resource('/api/posts/:id');
});

// AUTHENTICATION CONTROLLER
app.controller('authController', function($scope, $http, $rootScope, $location){
   // create or identify user with key values from form
   $scope.user = {username: '', password: ''};
   $scope.error_message = '';

   $scope.login = function(){
      // post to this api, get user object for current user = data
      $http.post('/auth/login', $scope.user).success(function(data){
         if(data.state == 'success'){
            $rootScope.authenticated = true;
            $rootScope.current_user = data.user.username;
            $location.path('/');
         }
         else{
            $scope.error_message = data.message;
         }
      });
   };

   $scope.register = function(){
      // http.post req w/user set authentication to true
      // and get user from data, then redirect to rootScope
      $http.post('/auth/signup', $scope.user).success(function(data){
         if(data.state == 'success'){
            $rootScope.authenticated = 'true';
            $rootScope.current_user = data.user.username;
            $location.path('/');
         }
         else{
            $scope.error_message = data.message;
         }
      });
   };
});
