import { React, Component } from 'react';
import uuid from 'uuid';
import style from './styles/App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }
//   addTodo(val) {
//     const todo = {
//       text: val,
//       id: uuid.v4()
//     };
//     const data = [...this.state.data, todo];
//     this.setState({ data });
//   }

//   removeTodo(id) {
//     const remainder = this.state.data.filter(todo => todo.id !== id);
//     this.setState({ data: remainder });
//   }

//   render() {
//     return (
//       <div className={style.TodoApp}>
//         <p>test</p>Tutaj pojawią się komponenty naszej aplikacji.
//       </div>
//     );
//   }
// }

const App = () => <div className={style.TodoApp}>Tutaj pojawią się komponenty naszej aplikacji.</div>;

export default App;
