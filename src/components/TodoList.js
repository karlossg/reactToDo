import React from 'react';
import styles from './TodoList.css';

const TodoList = props => {
  const todos = props.todos;
  console.log(props);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} id={todo.id}>
          {todo.text}
          <button onClick={e => props.remove(Number.parseInt(e.target.parentElement.id))}>x</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
