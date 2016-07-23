import $ from 'jquery';

function HomeController($scope, SERVER, $http){
	  $scope.images = [];

	  	$scope.popups = (image)=>{
		  $(`${image._id}`).append(`<span class="tag is-danger">Delete
		  	<button class="delete" ng-click="deleteimage(image._id)"></button>
		  </span>`)
		};
		$scope.removePopups = (image)=>{
			$(".tag").remove();
		}

  init();



  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data;
      console.log($scope.images);
    });
  }

	$scope.deleteImage = (imageID) =>{
		console.log(imageID);
		$http.delete(SERVER.URL + imageID).then( (response) => {
			$scope.images = $scope.images.filter((i)=>{
				return i._id !== imageID;
			});
		});
	};	
}

HomeController.$inject = ['$scope', 'SERVER', '$http'];

export { HomeController };