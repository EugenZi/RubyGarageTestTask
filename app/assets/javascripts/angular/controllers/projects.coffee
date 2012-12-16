window.ProjectsController = ($scope, $http )->
      $scope.asd = "Test"
      $http.get('/list.json').success ( data )=>
         $scope.itemsList = data
