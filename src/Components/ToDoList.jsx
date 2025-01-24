import React, { useState } from 'react'
import { initialState } from '../data/todos';

export default function ToDoList() {
    const [todos, setTodos] = useState(initialState);
    const [newTodo, setNewTodo] = useState({
        id: null,
        title: "",
        completed: false
    });
    const [editTodo, setEditTodo] = useState(false);

    function handleInputChange(event) {
        const todoTobeAdded = {
            id: todos.length + 1,
            title: event.target.value,
            completed: false
        };

        setNewTodo(todoTobeAdded);
    }

    function addTodo() {
        if (newTodo.title.trim() !== "") {
            setTodos(todos => [...todos, newTodo]);
            setNewTodo({
                id: null,
                title: "",
                completed: false
            });
        }
    }

    function CompleteToDo(id) {
        const updatedTodos = todos.map(todo => (todo.id == id) ? {...todo, completed: !todo.completed} :  todo);
        setTodos(updatedTodos)
    }


    function deleteTodo(id) {
        const currentToDos = todos.filter(todo => todo.id != id);
        setTodos(currentToDos);
    }


    function EditToDo() {

    }

    return (
        <div className="toDoList">
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTodo.title}
                    onChange={handleInputChange} />

                <button className="add-btn" onClick={addTodo}>Add</button>

                <ol>
                    {todos.map((todo, index) =>
                        <li key={index}>
                            <input type="checkbox" onChange={() => CompleteToDo(todo.id)} />
                            <p className="task">{todo.title}</p>
                            <button className="edit-btn" onClick={() => EditToDo(todo.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)} disabled={!todo.completed}>Delete</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}