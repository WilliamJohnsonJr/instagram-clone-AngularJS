function HomeController($scope, SERVER, $http){
	$scope.images = [];

  	init();

  	$scope.likeImage = (image)=>{
  		image.liked = true;
  		image.likeCount = image.likeCount + 1;
      $http.put(SERVER.URL + image._id, JSON.stringify(image, ['information', 'likeCount', 'name', 'url'])).then( (response) => {
          console.log(response.data);
            init();
        });
  	};

  	$scope.mouseOver = function(image){
  		image.popup = true;
  	};

  	$scope.mouseLeave = function(image){
  		image.popup = false;
  	}

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data;
      $scope.images.forEach(function(image){
      	image.popup = false;
      });
      console.log($scope.images);
    });
  }

	$scope.deleteImage = (image) => {
		$http.delete(SERVER.URL + image._id).then( (response) => {
        init ();
		});
	};	
}

HomeController.$inject = ['$scope', 'SERVER', '$http'];

export { HomeController };