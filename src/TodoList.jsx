import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "NEURAL_LINK_ESTABLISHED", id: uuidv4(), isDone: false }]);
    let [newTodo, setnewTodo] = useState("");
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos((prev) => [...prev, { task: newTodo.toUpperCase(), id: uuidv4(), isDone: false }]);
        setnewTodo("");
    };

    const toggleDone = (id) => {
        setTodos((prev) => prev.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t));
    };

    return (
        <div className="zero-hud-frame">
            <div className="corner-accents"></div>
            
            <header className="hud-header">
                <div className="header-top">
                    <span className="blink-dot"></span>
                    <span className="status-text">ZERO_CORE_ACTIVE</span>
                    <span className="clock">{time}</span>
                </div>
                <h1>TASK_MANAGER<span>v2.0.4</span></h1>
            </header>

            <div className="input-zone">
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        placeholder="INPUT_COMMAND_SEQUENCE..." 
                        value={newTodo}
                        onChange={(e) => setnewTodo(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addNewTask()}
                    />
                    <div className="input-glow"></div>
                </div>
                <button className="execute-btn" onClick={addNewTask}>
                    <span className="btn-text">EXECUTE</span>
                    <span className="btn-glitch"></span>
                </button>
            </div>

            <div className="data-stream">
                {todos.map((todo) => (
                    <div key={todo.id} className={`data-node ${todo.isDone ? 'processed' : ''}`}>
                        <div className="node-info">
                            <span className="node-id">[{todo.id.slice(0,4)}]</span>
                            <span className="node-task">{todo.task}</span>
                        </div>
                        <div className="node-actions">
                            <button className="action-done" onClick={() => toggleDone(todo.id)}>
                                {todo.isDone ? "REBOOT" : "CLEAR"}
                            </button>
                            <button className="action-del" onClick={() => setTodos(t => t.filter(x => x.id !== todo.id))}>
                                KILL
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hud-footer">
                <div className="cpu-load">
                    <span>CPU_LOAD: 14.2%</span>
                    <div className="load-bar"><div className="load-fill"></div></div>
                </div>
                <button className="override-btn" onClick={() => setTodos(todos.map(t => ({...t, isDone: true})))}>
                    SYSTEM_OVERRIDE
                </button>
            </div>
        </div>
    );
}