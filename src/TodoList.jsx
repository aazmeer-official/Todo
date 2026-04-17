import { useState } from "react"

export default function TodoList(){

let [todos,setTodos] = useState(["Sample Task"])
let [newTodo,setnewTodo] = useState("")
let addNewTask = ()=>{
    setTodos([...todos,newTodo]);
    setnewTodo("");
}
let updateTaskValue = (event)=>{
    setnewTodo(event.target.value)
}

    return(
        <div>
            <input type="text" placeholder="Add a Task"  onChange={updateTaskValue}  value={newTodo}/>
            <button type="submit" onClick={addNewTask}>Submit</button>
            <br /><br /><br /><hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>{
                    return(<li>{todo}</li>)
                })}

            </ul>
        </div>
    )
}