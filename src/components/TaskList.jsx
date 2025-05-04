// TaskList.jsx
import Task from "./Task";

export default function TaskList({loading, tasks}) {
  if (loading) {
    return (
      <div className="list-items">
        <div className="loading-item">
          <span className="glow-checkbox" />
          <span className="glow-text">Loading...</span>
        </div>
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="no-tasks">
          <span className="glow-checkbox" />
          <span className="glow-text">No tasks</span>
        </div>
      </div>
    );
  }
  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
