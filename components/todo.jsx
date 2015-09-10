import React from 'react';
import TodoActions from '../actions/todo-actions';

const Todo = React.createClass({

	render () {
		return (
			<li>
				<p>{this.props.todo.todo}</p>
				<button onClick={this.props.deleteHandler}>X</button>
			</li>
		)
	}
});


export default Todo;
