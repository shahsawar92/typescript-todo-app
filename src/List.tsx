import React from 'react'
import './todostyle.css';
interface List {
     comming:Todo;
     Toggle: T;
}
export const List: React.FC<List> = ({comming,Toggle}) => {
    return (
        <li className={comming.complete?"complete":undefined} onChange={()=> Toggle(comming)}>
            <input type="checkbox" checked={comming.complete}></input> {comming.text}
        </li>
    )
}
