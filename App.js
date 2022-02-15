import React, { useState }  from 'react';
import './App.css';
import TodoTable from './components/TodoTable'

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteItem = (event) => {
    event.preventDefault();
    setTodos(todos.filter((item, index) => parseInt(event.target.id) !== index))
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add" />
      </form>
      <TodoTable todos = {todos}/>
    </div>
  );
}

export default App;