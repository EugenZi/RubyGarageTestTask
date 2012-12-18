(function(global, document){

	global.TasksController = function($scope, $http){

		$scope.addTodo = function($event) {

			var form = $($event.srcElement);

			form.live("submit", function(event){ 
	    		var data = form.serialize(),
	  			url  = form.attr("action"),
	  			type = form.attr("method");
		  		$.ajax({
					url:  url,
					type: type,
					data: data,
					success: function(){
						$http.get('/list.json').success(function(data) {
		    				$scope.itemsList = data;
		  				});
		  				form_table.remove();
					}
				});
				event.preventDefault(true);
	    	});
	    	$event.preventDefault(true);
		}
	}

	$scope.clicker = function($event){
		console.log($event);
		$event.preventDefault(true);
	}

})(window, window.document)
