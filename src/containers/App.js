import React from 'react';
import uuid from 'uuid';
import styles from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

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
        <TodoList todos={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default App;
