import React from 'react';
import styles from './Todo.css';

const Todo = props => {
  return (
    <li className={styles.list} id={props.todo.id}>
      {props.todo.text}
      <button
        className={styles.deleteButton}
        onClick={e => {
          props.remove(e.target.parentElement.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Todo;
