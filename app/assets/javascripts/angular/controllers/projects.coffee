window.ProjectsController = ($scope, $http )->
      $scope.asd = "Test"
      $http.get('/list.json').success ( data )=>
         $scope.itemsList = data
      $scope.phones = [
        {"name": "Nexus S",
        "snippet": "Fast just got faster with Nexus S."},
        {"name": "Motorola XOOM™ with Wi-Fi",
        "snippet": "The Next, Next Generation tablet."},
        {"name": "MOTOROLA XOOM™",
        "snippet": "The Next, Next Generation tablet."}
      ]
