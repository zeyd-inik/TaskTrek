import TaskCard from './TaskCard';
import './TaskColumn.scss';

function TaskColumn({ icon, status, tasks, selectedTags }) {
  return (
    <section className="task_column">
      <h2>
        <span className="goal_icon">{icon}</span>
        <span className="status_text">{status}</span>
      </h2>
      {/*   {tasks.status === status &&
        tasks.map((task) => {
          return (
            <TaskCard
              task={task}
              selectedTags={selectedTags}
              selectTag={selectTag}
              key={task.id}
            />
          );
        })} */}
      {tasks.map((task) => {
        if (task.taskStatus === status) {
          const { taskInput, selectedTags, id } = task;
          return (
            <TaskCard
              taskInput={taskInput}
              selectedTags={selectedTags}
              key={id}
            />
          );
        }
      })}
    </section>
  );
}

export default TaskColumn;
