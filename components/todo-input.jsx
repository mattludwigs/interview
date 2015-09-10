import React from 'react';
import AppDispatcher from '../dispatchers/app-dispatcher';
import TodoStore from '../stores/todo-store';
import TodoActions from '../actions/todo-actions';

const TodoInput = React.createClass({

	addTodo (event) {
		event.preventDefault();
		let elem = event.target.elements[0];
		TodoActions.create(elem.value);
		elem.value = '';
	},

	render () {
		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input type='text' placeholder='Todo'/>
					<input type='submit' value='Add Todo'></input>
				</form>
			</div>
		)
	}
});

export default TodoInput;
