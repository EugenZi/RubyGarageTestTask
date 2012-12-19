(function(global, document){

	global.ProjectsController = function($scope, $http) {

	  	var _this = this;

	  	$http.get('/list.json').success(function(data) {
	    	$scope.itemsList = data;
	  	});

	  	$scope.showTodoListForm = function($event) {
	  		$("#form_hidden").show();
	    	$event.preventDefault(true);
	  	}

	  	$scope.addTodoList = function(){
	    	var form_table = $("#form_hidden"),
	    		form       = $("#form_hidden").find('form');
	    	form.live("submit", function(event){ 
		  		$.ajax({
					url:  form.attr("action"),
					type: form.attr("method"),
					data: form.serialize(),
					success: function(){
						form_table.find("input[type=text]").val("");
		  				form_table.hide();
						$http.get('/list.json').success(function(data) {
		    				$scope.itemsList = data;
		  				});
					}
				});
				event.preventDefault(true);
	    	});
	  	}

		$scope.deleteTodoList = function($event) {
			var target = $event.srcElement || $event.target;
			console.log(target);
			$.ajax({
				url:  $(target).parent('a').attr('href'),
				success: function(){
					$http.get('/list.json').success(function(data) {
		    				$scope.itemsList = data;
		  			});
				}
			});

			$event.preventDefault(true);

		}

	};

})(window, window.document)
