import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
interface AddTodoForm{
    addTodo: (newtodo:string)=>void;
}
export const From: React.FC<AddTodoForm>=({addTodo}) =>{
    const [newtodo,setnewtodo]=useState("");
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{

        setnewtodo(e.target.value);
    }
    const handleSubmit =(e: FormEvent<HTMLButtonElement>)=>{

        e.preventDefault();
        addTodo(newtodo);
    }
return(

    <div>
        <form>
        <input type="text" placeholder="Enter next Todo..." value={newtodo} onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>add value</button>
        </form>
    </div>
)
}