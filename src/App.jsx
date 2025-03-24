
import './App.css'
import Task from './Components/Task'

function App() {
  

  return (
    <div className="App">
      <form className="addTask">
        <label>Enter to do list
          <input type="text" />
          <input type="button" value="Add Task" />
        </label>
      </form>
      <div className="list-todo">
      
      </div>
    
      <Task />
    </div>
  )
}

export default App
