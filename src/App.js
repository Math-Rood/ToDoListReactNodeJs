import './App.css';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async() => {
      setLoading(true);

      const res = 
        await fetch(API + "/todos").then((res) => res.json()).then((data) => data).catch((err) => console.log(err));

        setLoading(false);

        setTodos(res);
    };

    loadData();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todos = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos",{
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todos]);

    setTitle("");
    setTime("");
  };

  const handleDelete = async (id) => {
    await fetch(API + "/todos/" +id,{
      method: "DELETE"
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  const handleEdit = async (todo) =>{
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id,{
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      }
    });

    setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)));
  };

  if(loading){
    return <p> Loading...</p>;
  }

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
            <input
                type="text" 
                name="title" 
                placeholder="Todo Title" 
                onChange={(e) => setTitle(e.target.value)}
                value={title || ""}
                required
            />
          </div>
          <div className="form-control">
            <label htmlFor="title">Duration:</label>
            <input
                type="text" 
                name="time" 
                placeholder="Estimated time (in hours)" 
                onChange={(e) => setTime(e.target.value)}
                value={time || ""}
                required
            />
          </div>
          <input type="submit" value="Create Todo"/>
        </form>
      </div>
      <div className="list-todo">
        <h2>Lists</h2>
        {todos.length === 0 && <p>Haven't to do!</p>}
        {todos.map((todos) => (
          <div className={todos.done ? "todo-done" : ""} key={todos.id}>
            <h3>{todos.title}</h3>
            <p>Duration: {todos.time}</p>
            <div className="actions">
              <span onClick={() => handleEdit(todos)}>
                {!todos.done? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
              </span>
              <BsTrash onClick={() => handleDelete(todos.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
