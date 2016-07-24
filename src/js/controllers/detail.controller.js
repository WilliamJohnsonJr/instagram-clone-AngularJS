function DetailController ($scope, $stateParams, SERVER, $http){

$scope.detailImage = {};

  init();

  function init () {

    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.detailImage = res.data;
    });

  }

}

DetailController.$inject = ['$scope', '$stateParams', 'SERVER', '$http'];
export { DetailController };