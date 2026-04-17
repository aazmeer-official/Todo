import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setnewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodo) => [
            ...prevTodo, 
            { task: newTodo, id: uuidv4(), isDone: false }
        ]);
        setnewTodo("");
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let updateTaskValue = (event) => {
        setnewTodo(event.target.value);
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, isDone: true };
            })
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                }
                return todo;
            })
        );
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a Task" 
                onChange={updateTaskValue} 
                value={newTodo} 
            />
            <button onClick={addNewTask}>Submit</button>
            <br /><br /><hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginBottom: "10px" }}>
                        <li style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            <span>{todo.task}</span>
                        </li>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Done</button>
                    </div>
                ))}
            </ul>
            <hr />
            <button onClick={markAllAsDone}>Mark All Done</button>
        </div>
    );
}