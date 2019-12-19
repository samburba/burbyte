import { HttpClient } from '@angular/common/https';

const app = angular.module('burbyte', []);
app.controller("mainController", function($scope) {
	$scope.date = () => new Date().toString().toLowerCase().slice(0, 16);
	$scope.posts = () => () => this.httpService.get('posts.json').subscribe(
		data => this.posts = data as string []);
});

