import PropTypes from "prop-types";

export default function Task({task: {id, title, state}, onToggleTask}) {
  const isArchived = state === "TASK_ARCHIVED";
  const isPinned = state === "TASK_PINNED";
  const isInbox = state === "TASK_INBOX";

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor={`archiveTask-${id}`}>
        <input
          type="checkbox"
          id={`archiveTask-${id}`}
          name="checked"
          checked={isArchived}
          onChange={() =>
            onToggleTask(id, isArchived ? "TASK_INBOX" : "TASK_ARCHIVED")
          }
        />
        <span className="checkbox-custom" />
      </label>
      <label className="title" htmlFor={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {!isArchived && (
        <button
          className={`pin-button ${isPinned ? "pinned" : ""}`}
          type="button"
          id={`pinTask-${id}`}
          onClick={() =>
            onToggleTask(id, isPinned ? "TASK_INBOX" : "TASK_PINNED")
          }
        >
          <span className="icon-star" />
        </button>
      )}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(["TASK_INBOX", "TASK_PINNED", "TASK_ARCHIVED"])
      .isRequired,
  }).isRequired,
};
Task.defaultProps = {
  task: {
    id: "1",
    title: "Task 1",
    state: "TASK_INBOX",
  },
};
