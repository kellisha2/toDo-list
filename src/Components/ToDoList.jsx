import React, {useState} from 'react'

function ToDoList() {
  const [todos, setTodos] = useState ([]);
  const [newToDo, setNewToDo ] = useState ("");

  function handleInputChange(event){
    setNewTask(event.target.value)
  }
}

function addToDo {

}

function CompleteToDo {

}


function DeleteToDo {

}


function EditToDo {

}

return(
    <div className="toDoList">

        <h1>To Do List:</h1>

        <div>
            <input 
             type="text"
             placeholder="Enter a task"
             value= {newToDo}
             onChange = {handleInputChange}/>

             <button className="add-btn" onClick={addToDo}>Add</button>

             <ol>
                {toDos.map((toDo, index) =>
                <li>
                    <input type="checkbox" onChange={CompleteToDo} />
                    <p className="task">{toDo}</p>
                    <button className="edit-btn" onClick={() => EditToDo (index)}>Edit</button>
                    <button className="delete-btn" onClick={() => DeleteToDo (index)}>Delete</button>


                </li>
                )}
             </ol>
        </div>


    </div>

  
)
export default ToDoList