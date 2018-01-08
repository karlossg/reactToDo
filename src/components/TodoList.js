import React from 'react';
import Todo from '../components/Todo';
import styles from './TodoList.css';

const TodoList = props => {
  const todos = props.todos;
  return <ul>{todos.map(todo => <Todo key={todo.id} todo={todo} remove={props.remove} />)}</ul>;
};
export default TodoList;
