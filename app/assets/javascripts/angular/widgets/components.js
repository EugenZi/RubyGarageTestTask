(function() {
    angular.module('AppModule', [])
        .directive('editTodoFocusout', function() {
            return function(scope, element, attrs) {
            	
            	$(element).live("focusout", function(event){

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
							scope.itemsList = request_data;
						}
					});
					event.preventDefault(true);

	    		});
            };
        })
        .directive('submitTodoList', function() {
            return function(scope, element, attrs){
	        	$(element).live('submit', function(event){
	        		$(this).find('input.enabled').trigger('focusout');
	        		event.preventDefault(true);
	        	});
	  		};
        })
        .directive('deleteBlock', function(){
        	return function(scope, element, attrs){
	        	$(element).live('click',function(event){
		  			$("#form_hidden").hide();
					event.preventDefault(true);
		  		});
        	}
        })
        .directive('editTodoList', function(){
        	return function(scope, element, attrs){
	        	$(element).live('click', function(event){
	        		$(this).closest('.block_top')
		    			  .find("input.disabled")
		    			  .removeClass('disabled')
		    			  .removeAttr('disabled')
		    			  .addClass('enabled')
		    			  .focus();

		  			event.preventDefault(true);
	        	});
        	}
        })
   //      .directive("addTodo", function(){
   //      	return function(scope, element, attrs){
			//   	$(element).live("submit", function(event){
			//   		var form = $(this);
			// 		$.ajax({
			// 			url:  attrs.action,
			// 			type: attrs.method,
			// 			data: form.serialize(),
			// 			success: function(request_data){
			// 				$.get('/list.json', function(data){
			// 					console.log(scope, data);
			// 					scope.itemsList = data;
			// 				});
			// 				form.find('input[type=text]').val('');
			// 			}
			// 		});
			// 		event.preventDefault(true);
			// 	});
			// }
   //      });
})();