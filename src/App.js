import './App.css';
import { useState} from "react"



function App() {
  const [todoList, setTodoList] = useState([])
  const [inputTask, setInputTask] = useState("")


  const handleInput = (event) => {
    setInputTask(event.target.value)
  }

  const saveInput = () => {
    setInputTask("");

    const task =  {
      id: todoList.length === 0 ? 1: todoList[todoList.length -1].id + 1,
      taskName: inputTask,
    }

    setTodoList([...todoList, task])
  }

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id)

    setTodoList(newTodoList)

  }

 

  return (
    <div className="App">

    
      <div className="addTask">
        <input type="text" value={inputTask} onChange={handleInput} />

        <button onClick={saveInput} >Add Task</button>
        
      </div>
      <div className="addTask">

        {todoList.map((task, hey) => {
          return (
            <div>
              <h4 key={hey}>{task.taskName} </h4>
              <button onClick={ () => deleteHandler(task.id)}>X</button>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
