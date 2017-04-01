var app = angular.module('wubbly', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/home')

$stateProvider

  .state("home", {
    url:"/home",
    views: {
      'main':{
        templateUrl: 'Templates/title.html',
        resolve:{
          noteService: function($http){
            console.log("this runs on start");
            console.log($http.get('/getData'))
            return $http.get('/getData');
          }

        },
        controller: function($scope,$http,noteService){
            $scope.notes = noteService.data;
            $scope.newNote = {};


            $scope.saveNote = function(){
              $http.post('/addNote',$scope.newNote);
              console.log($scope.newNote);
              $scope.notes.push($scope.newNote);
              $scope.newNote = {};
            }
        }
      }
    }
  })

.state("example", {
    url:"/example",
    views: {
      'main':{
        templateUrl: 'Templates/title1.html',
        resolve:{
          noteService: function($http){

          }

        },
        controller: function($scope,$http,noteService){

        }
      }
    }
  })





})//close the config property

/*$('#noteButton').click("createForm"){
  function createForm(){
    $form = ("<form id=""></form>");
    $form.append(<)
  }
}*/
