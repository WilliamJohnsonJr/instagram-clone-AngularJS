function AddEditController ($scope, SERVER, $http, $state){

	$scope.addImage = (image) => {
	    $http.post(SERVER.URL, image).then( (res) => {
	      $state.go('root.home');
	    });
  	};

}

AddEditController.$inject = ['$scope', 'SERVER', '$http', '$state'];
export { AddEditController };