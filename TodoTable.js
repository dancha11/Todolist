import React, { useState }  from 'react';


function TodoTable() {

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
        <div>
          <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add" />
      </form>
       <table><tbody>
          {
            todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
                <td><button id={index} onClick={deleteItem}>Delete</button></td>
                </tr>)
          }
        </tbody></table>
        </div>
    )
}
export default TodoTable;

