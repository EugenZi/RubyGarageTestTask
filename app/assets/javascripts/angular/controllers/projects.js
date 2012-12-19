(function(global, document){

	global.ProjectsController = function($scope, $http) {

	  	$http.get('/list.json').success(function(data) {
	    	$scope.itemsList = data;
	  	});


	  	$scope.templates = {
		  	add_task_list: 
		  	{
			    name : 'add_task_list.html',
			    url  : 'add_task_list.html'
	    	},

			add_task: 
			{
				name: 'add_task.html',
				url: 'add_task.html'
			}
    	};

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
		$scope.addTodo = function(){
		  	$('.new_task').live("submit", function(event){
		  		event.preventDefault(true);
		  		var form = $(this);
				$.ajax({
					url:  form.attr('action'),
					type: form.attr('method'),
					data: form.serialize(),
					success: function(request_data){
						$http.get('/list.json').success(function(data) {
		    				$scope.itemsList = data;
		  				});
						form.find('input[type=text]').val('');
					}
				});
			});
        }

	};

})(window, window.document)
