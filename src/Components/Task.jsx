import { useState } from "react"

const Task = () => {

    const [todoList, setTodoList] = useState([]);

    return <>
    <form className="addTask">
        <label>Enter to do list
          <input type="text" />
          <input type="button" value="Add Task" />
        </label>
      </form>
      <div className="todo-list">
      
      </div>
    </>
}

export default Task