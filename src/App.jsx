import { useState, useEffect } from 'react';

import './App.scss';

/* icons */
import { GoGoal } from 'react-icons/go';
import { LuStar } from 'react-icons/lu';
import { TiTickOutline } from 'react-icons/ti';

/* components */
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const fetchData = async () => {
    const data = await JSON.parse(localStorage.getItem('tasks'));
    if (!data) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      setTasks(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const checkTag = (tag) => {
    const isSelected = selectedTags.some((selectedTag) => {
      return selectedTag === tag;
    });
    return isSelected;
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  };

  const selectTag = (tag) => {
    const isSelected = selectedTags.some((selectedTag) => {
      return selectedTag === tag;
    });
    if (!isSelected) {
      setSelectedTags((prev) => {
        return [...prev, tag];
      });
    } else {
      const newSelectedTags = selectedTags.filter((selectedTag) => {
        return selectedTag !== tag;
      });
      setSelectedTags(newSelectedTags);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <TaskForm
          setTasks={setTasks}
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
          selectTag={selectTag}
          checkTag={checkTag}
        />
      </header>
      <main className="task_columns_container">
        <TaskColumn
          icon={<GoGoal style={{ color: 'red' }} />}
          status="To do"
          tasks={tasks}
          selectedTags={selectedTags}
          selectTag={selectTag}
          checkTag={checkTag}
          deleteTask={deleteTask}
        />
        <TaskColumn
          icon={<LuStar style={{ color: '#d6d60a' }} />}
          status="Doing"
          tasks={tasks}
          selectedTags={selectedTags}
          selectTag={selectTag}
          checkTag={checkTag}
          deleteTask={deleteTask}
        />
        <TaskColumn
          icon={<TiTickOutline style={{ color: 'green' }} />}
          status="Done"
          tasks={tasks}
          selectedTags={selectedTags}
          selectTag={selectTag}
          checkTag={checkTag}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
