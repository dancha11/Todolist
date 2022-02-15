import React from 'react';

function TodoTable(props) {
  
  
    return (
        <div>
       <table><tbody>
          {
            props.todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
                <td><button id={index} onClick={props.deleteItem}>Delete</button></td>
                </tr>)
          }
        </tbody></table>
        </div>
    )
}
export default TodoTable;

