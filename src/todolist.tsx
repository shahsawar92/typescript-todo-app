import React from 'react';
import { List } from './List';
interface TodoForm{
    todos:Array<Todo>,
    toggle: T;
}

export const TodoList: React.FC<TodoForm> = ({todos,toggle})=>{
    return (
        <ul>{todos.map((todo,i)=>{
            return  <List key={i} comming={todo} Toggle={toggle}/>
             })}
        </ul>
        
    )
}