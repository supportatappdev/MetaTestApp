angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    })
    
    .state('tabs.sidemenus', {
      url: "/sidemenus",
      views: {
        'home-tab': {
          templateUrl: "templates/sidemenus.html",
           controller: 'SideMenusCtrl'
        }
      }
    })
    .state('tabs.listt', {
      url: "/listt",
      views: {
        'home-tab': {
          templateUrl: "templates/listt.html",
           controller: 'ListTCtrl'
        }
      }
    })
    .state('tabs.toggles', {
      url: "/toggles",
      views: {
        'home-tab': {
          templateUrl: "templates/toggles.html",
           controller: 'HomeTabCtrl'
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
.controller('ListTCtrl', function($scope) {
    $scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      shown: false,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  $scope.groups[0].shown = true;
  console.log(" In ListTCtrl ")
})
.controller('SideMenusCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
})

.controller('HomeTabCtrl', function($scope) {
    $scope.settingsList = [
    { text: "Wireless", checked: true },
    { text: "GPS", checked: false },
    { text: "Bluetooth", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };
  
  $scope.pushNotification = { checked: true };
  $scope.emailNotification = 'Subscribed';    
  console.log('HomeTabCtrl');
});
