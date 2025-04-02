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
    <div className="addTask text-center my-6">
        <h2 className="text-violet-800 text-3xl font-bold text-center mb-6">Enter to do list</h2>
          <input onChange={handleChange} className="mt-1 px-4 py-2 bg-slate-100 
          rounded-full focus:outline-violet-500 text-md leading-6 
          text-slate-900 border border-gray-300" />
          <button onClick={addTask} className="ml-4 px-4 py-2 bg-slate-100 rounded-full 
          focus:outline-violet-500 font-bold text-md leading-6 bg-violet-600 hover:bg-violet-800 text-white cursor-pointer">
            Add Task</button>  
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