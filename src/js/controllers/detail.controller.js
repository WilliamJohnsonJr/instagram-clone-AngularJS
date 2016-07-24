function DetailController ($scope, $stateParams, SERVER, $http){

$scope.detailImage = {};

  init();

  function init () {
  	console.log($stateParams);
    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.detailImage = res.data;
    });

  }

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

}

DetailController.$inject = ['$scope', '$stateParams', 'SERVER', '$http'];
export { DetailController };