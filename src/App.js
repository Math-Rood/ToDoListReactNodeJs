import "./App.css"
import { useState, useEffect } from "react";
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs';

const API = "http://localhost:5000";
function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <p>Create a new todo:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">what you will todo?</label>
            <p></p>
            <input
                type="text" 
                name="tittle" 
                placeholder="Todo Title" 
                onChange={(e) => setTitle(e.target.value)}
                value={title || ""}
                required
            />
          </div>
          <p></p>
          <input type="submit" value="Send"/>
        </form>
      </div>
      <div className="list-todo">
        <h2>Lists</h2>
        {todos.length === 0 && <p>Haven't to do!</p>}
      </div>
    </div>
  );
}

export default App;
