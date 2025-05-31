import './TaskTag.scss';

function TaskTag({ tag, selectTag, selected }) {
  const tagColor = {
    HTML: { backgroundColor: '#e5b253' },
    CSS: { backgroundColor: '#418b41' },
    JavaScript: { backgroundColor: '#abab3b' },
    React: { backgroundColor: '#7575ce' },
  };
  return (
    <button
      style={selected ? tagColor[tag] : {}}
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
