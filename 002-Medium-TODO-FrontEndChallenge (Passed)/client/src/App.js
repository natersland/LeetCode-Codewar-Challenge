import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  // สามารถที่จะ Add todo เข้าไปใน Todo list ได้
  const addTodo = () => {
    const temp = [...todos, inputText];
    // ไม่สามารถที่จะเพิ่ม Todo ที่มีตัวอักษรซ้ำกันลงไปใน Todo list ได้
    let i = 0;
    while (i <= todos.length) {
      if (inputText !== todos[i]) {
        setTodos(temp);
        // หลังจากคลิกปุ่ม “Add” แล้วจะต้อง Clear Input Text
        setInputText("");
      } else {
        temp.pop();
        setTodos(temp);
        alert("ตัวอักษรซ้ำจ้า ใส่ใหม่อีกครั้งนะ😜");
      }
      i++;
    }
  };

  // สามารถที่จะ Remove ตัว Todo ออกจาก Todo list ได้
  const deleteTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input
        id="todo-text"
        name="todo-text"
        type="text"
        placeholder="Enter new todo text..."
        value={inputText}
        onChange={handleTextChange}
      />
      <button onClick={addTodo}>Add</button>
      <h2>My Todo List</h2>
      <ul>
        {todos.map((item, index) => {
          return (
            <div className="todo-container" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-btn"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
