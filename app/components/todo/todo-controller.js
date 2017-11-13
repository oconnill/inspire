function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()


	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)

		todoService.getTodos(draw)

	}


	// takes in the array of todos from the get function and displays on the template
	function draw(todoList) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = '';

		//DONT FORGET TO LOOP


		template +=
			`
		<p>I Got ${todoList.length} Things To Do:</p>
		`
		for (var i = 0; i < todoList.length; i++) {
			var todo = todoList[i];
			if (todo.completed == true) {
				template += `
			<li>${todo.line} 
			<input class="mr2" type="checkbox" id="check" checked onclick="app.controllers.todoController.toggleTodoStatus(${i})">
			<a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0" onclick="app.controllers.todoController.removeTodo(${i})">Remove</a></li>                        
			</li>
		`
			}
			else {
				template += `
		<li>${todo.line} 
		<input class="mr2" type="checkbox" id="check" value="" onclick="app.controllers.todoController.toggleTodoStatus(${i})">
		<a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0" onclick="app.controllers.todoController.removeTodo(${i})">Remove</a></li>                        
		</li>
	`

			}
			

		}
		document.getElementById('todo-list').innerHTML = template
	}





	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM

		var newLine = e.target.line.value
		var todo = {
			line: newLine,
			completed: false
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	getTodos()

}