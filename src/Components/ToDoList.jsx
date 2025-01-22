import React, {useState} from 'react'

function ToDoList() {
  const [todos, setTodos] = useState ([]);
  const [newToDo, setNewToDo ] = useState ("");

  function handleInputChange(event){
    setNewTask(event.target.value)
  }
}

function CompleteTask {

}


function DeleteTask {

}


function EditTask {

}

return(
    <div className="toDoList">

        <h1>To Do List:</h1>

        <div>
            <input 
             type="text"
             placeholder="Enter a task"
             value= {newTask}
             onChange = {handleInputChange}/>

             <button className="">Add</button>
        </div>


    </div>

  
)
export default ToDoList