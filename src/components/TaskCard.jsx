import './TaskCard.scss';

/* icon */
import { TbTrashX } from 'react-icons/tb';

/* components */
import TaskTag from './TaskTag';

function TaskCard({ taskInput, selectedTags, task, deleteTask }) {
  return (
    <div className="task_card">
      <div className="title">{taskInput}</div>
      <div className="bottom_container">
        <div className="buttons_container">
          {selectedTags.map((selectedTag, index) => {
            return (
              <TaskTag
                key={index}
                tag={selectedTag}
                selected
              />
            );
          })}
        </div>
        <span
          onClick={() => deleteTask(task.id)}
          className="delete_icon"
        >
          {<TbTrashX />}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
