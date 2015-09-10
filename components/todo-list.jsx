import React from 'react';
import Todo from './todo';
import TodoStore from '../stores/todo-store';
import TodoActions from '../actions/todo-actions';

const TodoList = React.createClass({

	getInitialState () {
		return { todos: [] }
	},

	componentWillMount () {
		TodoStore.bind('change', this.newTodo);
    TodoActions.getTodos('all');
	},

	componentWillUnmount () {
		TodoStore.unBind('change', this.newTodo);
	},

	newTodo () {
		this.setState({ todos: TodoStore.getAll() });
	},

	deleteTodo (todo) {
		TodoActions.delete(todo);
	},

  renderTodoItem (todo) {
    return <Todo 
      key={todo.id} 
      todo={todo} 
      deleteHandler={this.deleteTodo.bind(this, todo)} />
  },

  render() {
    return (
      <ul>
      	{this.state.todos.map(this.renderTodoItem)}
      </ul>
    );
  },
});

export default TodoList;
