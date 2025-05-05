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

    const DeleteTask = (taskName) => {
      const newTodoList = todoList.filter((task)=> {
        if(task === taskName) {
          return false;
        } else {
          return true;
        }
      })

      setTodoList(newTodoList)
    }

    return <>

    {/* Add a single Todo list. */}
    <div className="addTask text-center py-6 mt-6 bg-violet-200/80">
        <h2 className="text-violet-800 text-3xl font-bold text-center mb-6">Enter Todo List</h2>
          <input onChange={handleChange} className="mt-1 px-4 py-2 bg-slate-100 
          rounded-full focus:outline-violet-600 text-md leading-6 
          text-slate-900 border border-violet-300" />
          <button onClick={addTask} className="ml-4 px-4 py-2 bg-slate-100 rounded-full 
          focus:outline-violet-500 font-bold text-md leading-6 bg-violet-600 hover:bg-violet-800 text-white cursor-pointer">
            Add Task</button>  
      </div>

      {/* Show the Todo list. */}
      <div className="todo-list py-6 bg-violet-100 text-violet-800 text-md">
        {todoList.map((task) => {
          return <div class="flex mx-auto px-4 py-4 w-sm">
            <h1 className="mx-2  bg-slate-100 border border-b-3 border-violet-300/60">{task}</h1>
            <button onClick={() => DeleteTask(task)}>X</button>
          </div>
        })}
      </div>
    </>
}

export default Task