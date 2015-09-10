import AppDispatcher from '../dispatchers/app-dispatcher';
import EventEmitter from 'events';
import assign from 'react/lib/Object.assign';
import db from '../utils/local-db';


const TodoStore = assign({}, EventEmitter.prototype, {

	_todos: [],

	emitChange () {
		this.emit('change');
	},

	bind (event, callback) {
		this.on(event, callback);
	},

	unBind (callback) {
		this.removeListener(event, callback);
	},

	getAll () {
		return this._todos;
	}

});

AppDispatcher.register(function dispatcherRecievePayload (payload) {

	switch (payload.eventName) {
		case 'new-todo':
			TodoStore._todos.push(payload.newTodo);
			TodoStore.emitChange();
			db.connect('todoapp').save(payload.newTodo);
			break;

		case 'delete-todo':
			TodoStore._todos = TodoStore._todos.filter(function filterTodos (todo) {
				if (todo.id === payload.deleteTodo.id) {
					db.delete(todo);
				} else {
					return todo;
				}
			});
			TodoStore.emitChange();
			break;

		case 'get-todos':
			TodoStore._todos = db.connect('todoapp').find('all');
			TodoStore.emitChange();
			break;
	}

	return true;

});


export default TodoStore;
