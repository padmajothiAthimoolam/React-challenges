import React, { useState } from 'react'

const ToDoList = () => {
    const[todos, setTodos] = useState([]);
    const[inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div>
      <h1> Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} name="inputValue" placeholder='Enter new Todo' onChange={handleChange}/>
        <button type="submit">Add New Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
