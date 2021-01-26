import React, { useState } from 'react';
import { From } from './inputform';
import { TodoList } from './todolist';

const arr : Array<Todo>=[
  
]

function App() {
  const [todos, settodos] = useState(arr)

  const Toggle = (select:Todo)=>{
    const newTodos= arr.map(todos=>{
       if(todos === select){
         return{
           ...todos, complete: !todos.complete
         }
       }
       return todos;
    });
    settodos(newTodos);
  }; 
  const addTodos =(newtodo:string)=>{
    settodos([...todos, {text: newtodo,complete:false}])
  }
  return (
    <div><React.Fragment>
      <TodoList todos={todos} toggle={Toggle}></TodoList>
      <From addTodo={addTodos} />
    
    </React.Fragment>
    </div>
  );
}

export default App;
