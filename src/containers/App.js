import React from 'react';
import uuid from 'uuid';
import styles from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div className={styles.todoApp}>
        <Title todos={this.state.data.length} />
        <TodoForm addTodo={val => this.addTodo(val)} />
        <TodoList todos={this.state.data} remove={id => this.removeTodo(id)} />
      </div>
    );
  }
}

export default App;
