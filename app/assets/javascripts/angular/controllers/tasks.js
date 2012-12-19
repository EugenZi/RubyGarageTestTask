(function(global, document){

	evt = global.e || global.event;

	global.TasksController = function($scope, $http){

		$scope.addTodo = function() {

			var form = $(evt.srcElement);

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
				evt.preventDefault(true);
	    	});
	    	evt.preventDefault(true);
		}
	}

})(window, window.document)
