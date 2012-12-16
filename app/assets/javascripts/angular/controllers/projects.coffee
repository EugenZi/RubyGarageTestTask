window.ProjectsController = ($scope, $http )->

    $http.get('/list.json').success ( data )=>
         $scope.itemsList = data

    $scope.addTodoList= ($event)->
        $("#form_hidden").clone().appendTo(".block").removeAttr("id")
        $event.preventDefault(true)

    $scope.editTodoList= ($event)->
      	$("input.disabled").removeClass('disabled')
      					   .addClass('enabled')
      					   .removeAttr('disabled');
      	$event.preventDefault(true);

    $scope.saveTodoList= ()->
      	console.log($scope);
      	return true;

    $scope.deleteTodoList= ($event)->
		true