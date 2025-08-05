// import React, { useState } from "react";
// import "./todo.css";

// const Todo = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [task, setTask] = useState([]);

//   const handleInputChange = (value) => {
//     setInputValue(value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (!inputValue.trim()) return;

//     setTask((prevTasks) => [...prevTasks, inputValue.trim()]);
//     setInputValue(""); // Clear input after adding
//   };

//   return (
//     <section className="todo-container">
//       <header className="header">
//         <h1>Todo List</h1>
//       </header>

//       <section className="form">
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <input
//               type="text"
//               className="todo-input"
//               autoComplete="off"
//               value={inputValue}
//               onChange={(event) => handleInputChange(event.target.value)}
//               placeholder="Enter a task"
//             />
//           </div>
//           <div>
//             <button type="submit" className="todo-btn">
//               Add Task
//             </button>
//           </div>
//         </form>
//       </section>

//       <section className="task-list">
//         <ul>
//           {task.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </section>
//     </section>
//   );
// };

// export default Todo;
import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    setTask((prevTasks) => [...prevTasks, inputValue.trim()]);
    setInputValue("");
  };

  const handleDelete = (indexToDelete) => {
    setTask((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
              placeholder="Enter a task"
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>

      <section className="task-list">
        <ul>
          {task.map((item, index) => (
            <li key={index} className="task-item">
              <span>{item}</span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
                title="Delete Task"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
