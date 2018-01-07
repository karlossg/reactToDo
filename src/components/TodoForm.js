import React from 'react';
import styles from './TodoList.css';

const TodoForm = props => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />

      <button
        onClick={() => {
          props.addTodo(input.value);
          input.value = '';
        }}>
        add
      </button>
    </div>
  );
};
export default TodoForm;
