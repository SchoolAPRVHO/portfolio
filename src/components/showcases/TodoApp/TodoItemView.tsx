import React from "react";
import { TodoItem } from "./TodoList";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

interface ITodoItemProps{
    todo:TodoItem,
    markCompleted:(index: number, completed: boolean)=>void,
    deleteTask:(index:number)=>void,
    index:number
}

const TodoItemView = ({todo,markCompleted,index,deleteTask}:ITodoItemProps) =>{

    return(
        <tr key={index}>
            <td>
                <Checkbox checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
            </td>
            <td>
                <p style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</p>
            </td>
            <td><Button variant="outlined" onClick={(e)=>deleteTask(index)}>Delete</Button></td>
        </tr>
        
                        
        
    )
}

export default TodoItemView;