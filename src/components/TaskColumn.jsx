import TaskCard from './TaskCard';
import './TaskColumn.scss';

function TaskColumn({ icon, status, tasks, selectedTags, selectTag }) {
  return (
    <section className="task_column">
      <h2>
        <span className="goal_icon">{icon}</span>
        <span className="status_text">{status}</span>
      </h2>

      {tasks.map((task) => {
        if (task.taskStatus === status) {
          const { taskInput, selectedTags, id } = task;
          return (
            <TaskCard
              taskInput={taskInput}
              selectedTags={selectedTags}
              selectTag={selectTag}
              key={id}
            />
          );
        }
      })}
    </section>
  );
}

export default TaskColumn;
