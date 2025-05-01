export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name="checked"
          defaultChecked={state === 'TASK_PINNED'}
          readOnly={true}
        />
        <span className="checkbox-custom" />
      </label>
      <label className="title" htmklFor={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>
    </div>
  );
}
