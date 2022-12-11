import React from "react";
import {Button,TextField} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import styles from './Todo.module.css';


interface ITodoInputProps{
    setTodo:(todo:string)=>void,
    addTodo:(todo: string)=>void,
    todo:string
}

const TodoInput = ({setTodo,addTodo,todo}:ITodoInputProps) =>{
    return(
        <div className={styles.InputContainer}>
            <TextField variant="standard" id="todo" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <Button variant="contained" onClick={() => addTodo(todo)}>Add</Button>
        </div>
    )
}

export default TodoInput;