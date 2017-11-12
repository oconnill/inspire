function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/DanO'


	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	//this is getting the todo from the server
	this.getTodos = function (callWhenDone) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				res = JSON.parse(res)
				localStorage.setItem('todo', JSON.stringify(res))
				callWhenDone(res)
			})
			.fail(logError)
	}


	// this function will create the post. after its poster you want to draw it?
	this.addTodo = function (todo,cb) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				cb()
			}) 
			.fail(logError)
	}

	// this.toggleTodoStatus = function (todoId) {
	// 	// MAKE SURE WE THINK THIS ONE THROUGH
	// 	//STEP 1: Find the todo by its index **HINT** todoList
	// 	//loop through array todolist and find index. 
	// 	for (var i = 0; i < todoList.length; i++) {
	// 		var todo = todoList[i];
	// 		todo.completed = !todo.completed

	// 			}
	// 		}
		
	// 	//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

	// 	//STEP 3: Here is that weird Ajax request because $.put doesn't exist
	// 	//put will update 
	// 	$.ajax({
	// 		method: 'PUT',
	// 		contentType: 'application/json',
	// 		url: baseUrl + '/' + todoId,
	// 		data: JSON.stringify(YOURTODOVARIABLEHERE)
	// 	})
	// 		.then(function (res) {
	// 			//DO YOU WANT TO DO ANYTHING WITH THIS?
	// 		})
	// 		.fail(logError)


	this.removeTodo = function () {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos()
			})
			.fail(logError)

	}

}
