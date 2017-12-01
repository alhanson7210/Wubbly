var app = angular.module('wubbly', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/welcome')

$stateProvider

//state name is welcome
.state("welcome",{
  //url in browser is welcome
  url:'/welcome',
  views:{
    //in the div ui-view 'home', welcome's code will be injected
    'home':{
      templateUrl:'Templates/welcome.html',
      resolve:{

      }

    }

  }

})
//wubs in sidebar that stores wubbys'
.state('wubStore',{
  url:'/wubStore',
  views:{
    //in the div ui-view 'appContent', the app's content will be injected
    'home':{
      templateUrl:'Templates/wubStore.html',
      resolve:{

      }
    }
  }
})
//this state is where the 4 binded wubbys' will be created
.state('wubbies',{
  //url in browser for wubbyCreator
  url:'/wubbies',
  views:{
    'home':{
      templateUrl:'Templates/wubbies.html',
      resolve:{

      }
    }
  }
})



});//close the config property
