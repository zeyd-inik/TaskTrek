import { useState } from 'react';

import './TaskForm.scss';

/* components */
import TaskTag from './TaskTag';

function TaskForm({
  setTasks,
  setSelectedTags,
  selectedTags,
  selectTag,
  checkTag,
}) {
  const [taskInput, setTaskInput] = useState('');

  const [taskStatus, setTaskStatus] = useState('To do');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskInput === '') {
      return;
    }
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          taskInput,
          selectedTags,
          taskStatus,
        },
      ];
    });
    setTaskInput('');
    setSelectedTags([]);
    setTaskStatus('To do');
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="task_form"
    >
      <input
        className="text_input"
        type="text"
        placeholder="Enter Your Task"
        value={taskInput}
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
      />

      <div className="bottom_container">
        <div className="tags_container">
          <TaskTag
            tag="HTML"
            selectTag={selectTag}
            selected={checkTag('HTML')}
          />
          <TaskTag
            tag="CSS"
            selectTag={selectTag}
            selected={checkTag('CSS')}
          />
          <TaskTag
            tag="JavaScript"
            selectTag={selectTag}
            selected={checkTag('JavaScript')}
          />
          <TaskTag
            tag="React"
            selectTag={selectTag}
            selected={checkTag('React')}
          />
        </div>
        <select
          className="select"
          value={taskStatus}
          onChange={(e) => {
            setTaskStatus(e.target.value);
          }}
        >
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <button
          className="submit-btn"
          type="submit"
          disabled={taskInput == ''}
          style={taskInput == '' ? { cursor: 'not-allowed' } : {}}
        >
          + Add Task
        </button>
      </div>
      <hr className="hr" />
    </form>
  );
}

export default TaskForm;
