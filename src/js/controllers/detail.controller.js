function DetailController ($scope, $stateParams, SERVER, $http){

$scope.detailImage = {};

  init();

  function init () {
    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.detailImage = res.data;
    });

  }

   	$scope.likeImage = (image)=>{
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

}

DetailController.$inject = ['$scope', '$stateParams', 'SERVER', '$http'];
export { DetailController };