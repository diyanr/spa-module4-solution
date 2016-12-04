(function() {
	'use strict';

	angular.module('data').service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];

	function MenuDataService($http) {
		var service = this;

		service.getAllCategories = function() {
			return $http({
				method: "GET",
				url: ("https://davids-restaurant.herokuapp.com/categories.json")
			})
			.then(function(response){
				var results = [];
				results = response.data;
				console.log("Menu categories count: " + results.length);
				return results;
			})
			.catch(function (error) {
		      console.log(error);
		    });
		};

		service.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: "GET",
				url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
				params: {
					category: categoryShortName
				}
			})
			.then(function(response){
				var results = [];
				results = response.data.menu_items;
				console.log("Menu items count: " + results.length);
				return results;
			})
			.catch(function (error) {
		      console.log(error);
		    });
		};
	}
	
})();
