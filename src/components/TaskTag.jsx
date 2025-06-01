import './TaskTag.scss';

function TaskTag({ tag, selectTag, selected }) {
  const tagColor = {
    HTML: { backgroundColor: '#e5b253', color: 'white' },
    CSS: { backgroundColor: '#418b41', color: 'white' },
    JavaScript: { backgroundColor: '#abab3b', color: 'white' },
    React: { backgroundColor: '#7575ce', color: 'white' },
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
