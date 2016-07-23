function AddEditController ($scope, SERVER, $http, $state){

	$scope.addImage = (image) => {
		image.liked = false;
		image.likeCount = 0;
		console.log(image);
	    $http.post(SERVER.URL, image).then( (res) => {
	      $state.go('root.home');
	    });
  	};

}

AddEditController.$inject = ['$scope', 'SERVER', '$http', '$state'];
export { AddEditController };