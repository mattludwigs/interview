import AppDispatcher from '../dispatchers/app-dispatcher';

const TodoActions = {

	create (todo) {
		AppDispatcher.dispatch({
			eventName: 'new-todo',
			newTodo: { todo: todo, id: Date.now() }
		});
	},

	delete (todo) {
		AppDispatcher.dispatch({
			eventName: 'delete-todo',
			deleteTodo: todo
		});
	},

	getTodos (query) {
		AppDispatcher.dispatch({
			eventName: 'get-todos',
			query: { q: query }
		});
	}

}

export default TodoActions;
