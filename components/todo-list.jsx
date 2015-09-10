import React from 'react';
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

  render() {
    return (
      <div>
        <ul>
        	{this.state.todos.map(function (todo) {
        		return (
        			<li key={todo.id}>
        				<p>{todo.todo}</p>
        				<button onClick={this.deleteTodo.bind(this, todo)}>X</button>
        			</li>
        		)
        		
        	}.bind(this))}
        </ul>
      </div>
    );
  },
});

export default TodoList;
