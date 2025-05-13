import {useState} from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const initialTasks = [
  {id: "1", title: "Task 1", state: "TASK_INBOX"},
  {id: "2", title: "Task 2", state: "TASK_INBOX"},
  {id: "3", title: "Task 3", state: "TASK_INBOX"},
  {id: "4", title: "Task 4", state: "TASK_INBOX"},
  {id: "5", title: "Task 5", state: "TASK_INBOX"},
  {id: "6", title: "Task 6", state: "TASK_INBOX"},
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim() === "") return;
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      state: "TASK_INBOX",
    };
    setTasks((tasks) => [newTask, ...tasks]);
    setNewTaskTitle("");
  };

  const toggleTaskState = (id, newState) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              state: newState,
            }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
        }}
      >
        <div className="list-items">
          <input
            className="list-item"
            type="text"
            placeholder="New task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
        </div>
        <div>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <TaskList tasks={tasks} loading={false} onToggleTask={toggleTaskState} />
    </div>
  );
}

export default App;
