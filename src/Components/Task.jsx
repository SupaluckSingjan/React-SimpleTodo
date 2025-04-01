import { useState } from "react"

const Task = () => {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
      setNewTask(event.target.value);
    }

    const addTask = () => {
      setTodoList([...todoList, newTask]);
    }

    return <>

    {/* Add a single Todo list. */}
    <div className="addTask">
        <h2 className="text-3xl font-bold underline">Enter to do list</h2>
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>  
        
      </div>

      {/* Show the Todo list. */}
      <div className="todo-list">
        {todoList.map((task) => {
          return <div>{task}</div>
        })}
      </div>
    </>
}

export default Task