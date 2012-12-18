(function(global, document){

	global.ProjectsController = function($scope, $http) {

	  	var _this = this;

	  	$http.get('/list.json').success(function(data) {
	    	$scope.itemsList = data;
	  	});

	  	$('input.enabled').live("focusout", function(){

	  		var form = $(this).closest("form"),
	  			data = form.serialize(),
	  			url  = form.attr("action"),
	  			type = form.attr("method");

	  		$(this).addClass('disabled')
				   .removeClass('enabled')
				   .attr('disabled','disabled');

			$.ajax({
				url:  url,
				type: type,
				data: data,
				success: function(request_data){
					$scope.itemsList = request_data;
				}
			});

	    });

	  	$('.edit_todo_list').live('submit', function(event){

	  		$(this).find('input.enabled').trigger('focusout');
	  		event.preventDefault(true);

	  	});

	  	$('.delete_empty_todo_list').live('click',function(event){

	  		$(this).closest(".item").remove();
			event.preventDefault(true);

	  	});

	  	$scope.addTodoList = function($event) {
	    	var form_table = $("#form_hidden").clone()
	    									  .insertAfter(".item:last")
	    									  .removeAttr("id"),
	    		form       = form_table.find('form');

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

	  	$scope.editTodoList = function($event) {

	    	$($event.srcElement).closest('.block_top')
	    						.find("input.disabled")
	    						.removeClass('disabled')
	    						.addClass('enabled')
	    						.removeAttr('disabled');

	  		$event.preventDefault(true);
	  	}

		$scope.deleteTodoList = function($event) {

			var elem = $($event.srcElement).parent("a");

			$.ajax({
				url:  elem.attr('href'),
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
