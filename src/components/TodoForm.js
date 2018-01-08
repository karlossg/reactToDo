import React from 'react';
import styles from './TodoList.css';

const TodoForm = props => {
  let input;

  return (
    <form
      className={styles.TodoForm}
      onSubmit={event => {
        event.preventDefault();
        props.addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        ref={node => {
          input = node;
        }}
      />

      <button className={styles.button}>add</button>
    </form>
  );
};
export default TodoForm;
