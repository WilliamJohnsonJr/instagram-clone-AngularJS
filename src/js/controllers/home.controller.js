function HomeController($scope, SERVER, $http){
	  $scope.pics = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.pics = res.data;
    });
  }
}

HomeController.$inject = ['$scope', 'SERVER', '$http'];
export { HomeController };