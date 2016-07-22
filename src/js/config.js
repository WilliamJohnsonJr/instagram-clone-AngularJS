function config ($stateProvider, $urlRouterProvider) {
	$stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('root.detail', {
      url: '/detail',
      templateUrl: 'templates/detail.tpl.html',
      controller: 'DetailController'
    })
    .state('root.addedit', {
      url: '/addedit',
      templateUrl: 'templates/addedit.tpl.html',
      controller: 'AddEditController'
    })    

      $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };