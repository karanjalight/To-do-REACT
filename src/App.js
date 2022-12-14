import './App.css';
import { useState} from "react"



function App() {
  const [todoList, setTodoList] = useState([])
  const [inputTask, setInputTask] = useState("")
  const [inputDescriptionTask, setInputDescriptionTask] = useState("")


  const handleInput = (event) => {
    setInputTask(event.target.value)
    
  }
  const handleInputDescription = (event) => {
    setInputDescriptionTask(event.target.value)
    
  }

  const saveInput = () => {
    setInputTask("");
    setInputDescriptionTask("");

    const task =  {
      id: todoList.length === 0 ? 1: todoList[todoList.length -1].id + 1,
      taskName: inputTask,
      taskDescription: inputDescriptionTask,
      complete: false,
    }

    setTodoList([...todoList, task])
  }
  

  const completeHandler = (id) => {
    
    setTodoList(todoList.map((task) => {
      if (task.id === id ){
        return {...task, complete:true};
        
      }else {
        return task;
      }
    }))


  }  

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id)
    console.log(todoList.filter((task) => task.id !== id))


    setTodoList(newTodoList)

  }

 

  return (
    <div className="App">

    
      <div className="addTask">
        <input type="text" value={inputTask} onChange={handleInput} />       


        <button onClick={saveInput} >Add Task</button>

        <div className='addDesctiption'>
        <input type="text" value={inputDescriptionTask} onChange={handleInputDescription} />
        </div>    
        
        

      </div>



      <div className="displayTask">

        {todoList.map((task, hey) => {
          return (
            <div key={hey}>
            

              {task.complete === false && 
              <div>
              <h4 key={hey}>{task.id}  {task.taskName}  </h4> 
              <p>
                {task.taskDescription}
              </p>
              </div>
              
              
               }
              
              
              {task.complete === true && <div>
                <h4 key={hey}>{task.id}  {task.taskName} </h4> 
                <p> {task.taskDescription} </p>
                <p> -Complete</p>
              </div> }


              <button style={{ backgroundColor: "green", borderColor: 'green', }} onClick={ () => completeHandler(task.id)}>Complete</button> 

              <button onClick={ () => deleteHandler(task.id)}> Delete </button> 
              
              
            </div>
          )
        })}
      </div>

    </div>
  );




}

export default App;
