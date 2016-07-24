function HomeController($scope, SERVER, $http){
	$scope.images = [];

  	init();

  	$scope.likeImage = (image)=>{
  		image.liked = true;
  		image.likeCount = image.likeCount + 1;
		console.log(image);
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

	$scope.deleteImage = (imageID) => {
		console.log("Removing: "+imageID);
		$http.delete(SERVER.URL + imageID).then( (response) => {
			$scope.images = $scope.images.filter((i)=>{
				return i._id !== imageID;
			});
			console.log("Removed.");
			console.log($scope.images);
		});
	};	
}

HomeController.$inject = ['$scope', 'SERVER', '$http'];

export { HomeController };