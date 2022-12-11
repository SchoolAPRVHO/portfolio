import React, {useState,useEffect} from "react";
import TodoList from "./TodoList"
import styles from "./Todo.module.css";
import TodoInput from "./TodoInput";

export interface TodoItem { 
    name: string;
    completed: boolean;
}

const TodoApp = () => {

    useEffect(() => {
        document.title = 'Todo';
      }, []);
    
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    const deleteTask = (index: number) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };


    return (
        <div className={styles.container}>
            <h1>Todo Application</h1>
            <div className={styles.AppContainer}>
                <TodoInput setTodo={setTodo} addTodo={addTodo} todo={todo}/>
                <TodoList todos={todos} markCompleted={markCompleted} deleteTask={deleteTask}/>
            </div>
        </div>
    );

}

//onAddClick meegeven aan child component

export default TodoApp;