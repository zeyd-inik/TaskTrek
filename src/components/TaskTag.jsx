import './TaskTag.scss';

function TaskTag({ tag, selectTag }) {
  return (
    <button
      type="button"
      className="task_tag"
      onClick={() => {
        selectTag(tag);
      }}
    >
      {tag}
    </button>
  );
}

export default TaskTag;
