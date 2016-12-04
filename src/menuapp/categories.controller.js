(function() {
	'use strict';

	angular.module('MenuApp').controller('CategoriesController', CategoriesController);

	CategoriesController$inject = ['menuCategories'];

	function CategoriesController(menuCategories) {
		var categoriesCtrl = this;
		categoriesCtrl.menuCategories = menuCategories;
	}

})();