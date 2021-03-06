(function(){
	'use strict';

	angular.module('MenuApp').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {
		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider

		// Home page
		.state('home', {
			url: '/',
			templateUrl: 'src/menuapp/template/home.template.html'
		})

		// Categories page
		.state('categories', {
			url: '/categories',
			templateUrl: 'src/menuapp/template/main-categories.template.html',
			controller: 'CategoriesController as categoriesCtrl',
			resolve: {
				menuCategories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})

		// Items page
		.state('categories.items', {
			url: '/items/{categoryShortName}',
			templateUrl: 'src/menuapp/template/main-items.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]
			}
		});
	}
	
})();
