import PropTypes from 'prop-types'

export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox' htmlFor={`archiveTask-${id}`}>
        <input
          type='checkbox'
          id={`archiveTask-${id}`}
          aria-label='アーカイブ'
          // defaultChecked={state === 'TASK_PINNED'}
        />
        <span className='checkbox-custom' />
      </label>
      <label className='title' htmlFor={`titleTask-${id}`}>
        <input
          type='text'
          id={`titleTask-${id}`}
          value={title}
          readOnly={true}
          placeholder='Input title'
          aria-label='タスクタイトル'
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          type='button'
          id={`pinTask-${id}`}
          aria-label='ピン留め'
        >
          <span className='icon-star' />
        </button>
      )}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['TASK_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'])
      .isRequired,
  }).isRequired,
}
Task.defaultProps = {
  task: {
    id: '1',
    title: 'Task 1',
    state: 'TASK_INBOX',
  },
}
