import React from "react";
import TodoItemView from "./TodoItemView";
import styles from './Todo.module.css';

export interface TodoItem { 
    name: string;
    completed: boolean;
}

interface ITodoListProps{
    todos:TodoItem[],
    markCompleted: (index: number, completed: boolean) => void
    deleteTask:(index:number)=>void
}

const TodoList = ({todos,markCompleted, deleteTask}:ITodoListProps) =>{

    return(
        <div className={styles.ListContainer}>
            <table>
                {todos.map((todo, index) => (
                   <TodoItemView todo={todo} index={index} markCompleted={markCompleted} deleteTask={deleteTask}/>
                ))}
            </table>
        </div>
    )

}

export default TodoList;