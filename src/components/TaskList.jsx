// TaskList.jsx
import Task from "./Task";
import PropTypes from "prop-types";

export default function TaskList({loading, tasks, onToggleTask}) {
  const LoadingRow = () => (
    <div className="list-items">
      <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
          <span>Loading...</span>
          <span>cool state</span>
        </span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {Array.from({length: 6}).map((_, index) => (
          <LoadingRow key={index} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">No tasks found</p>
          <p className="subtitle-message">Create a new task</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onToggleTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
  tasks: [],
};
