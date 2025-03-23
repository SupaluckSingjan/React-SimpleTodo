
import './App.css'

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
    </div>
  )
}

export default App
