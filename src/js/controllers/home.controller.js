import $ from 'jquery';

function HomeController($scope, SERVER, $http){
	$scope.images = [];

  	init();

  	$scope.likeImage = (image)=>{
  		image.liked = true;
  		image.likeCount = image.likeCount + 1;
		console.log(image);
  	};

  	$scope.popup = false;

  	$scope.mouseOver = function(){
  		$scope.popup = true;
  		console.log($scope.popup);
  	};

  	$scope.mouseLeave = function(){
  		$scope.popup = false;
  		console.log($scope.popup);
  	}

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data;
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