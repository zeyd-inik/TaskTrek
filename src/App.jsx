import './App.scss';
/* icons */
import { GoGoal } from 'react-icons/go';
import { LuStar } from 'react-icons/lu';
import { TiTickOutline } from 'react-icons/ti';
import { TbTrashX } from 'react-icons/tb';

function App() {
  return (
    <div className="App">
      {/* form component */}
      <header className="header">
        <form className="form">
          <input
            className="text_input"
            type="text"
            placeholder="Enter Your Task"
          />

          <div className="bottom_container">
            <div className="tags_container">
              <button
                className="tag-btn"
                type="button"
              >
                HTML
              </button>
              <button
                className="tag-btn"
                type="button"
              >
                CSS
              </button>
              <button
                className="tag-btn"
                type="button"
              >
                JavaScript
              </button>
              <button
                className="tag-btn"
                type="button"
              >
                React
              </button>
            </div>
            <select
              className="select"
              name="status"
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              className="submit-btn"
              type="submit"
            >
              + Add Task
            </button>
          </div>
        </form>
        <hr className="hr" />
      </header>
      <main className="task_columns_container">
        <section className="task_column">
          <h2>
            <GoGoal className="goal_icon" />{' '}
            <span className="status_text">To do</span>
          </h2>
          <div className="card">
            <div className="title">sjdhdds</div>
            <div className="bottom_container">
              <div className="buttons_container">
                <button className="tag_btn">HTML</button>
                <button className="tag_btn">CSS</button>
                <button className="tag_btn">JavaScript</button>
              </div>
              <span className="delete_icon">
                <TbTrashX />
              </span>
            </div>
          </div>
        </section>
        <section className="task_column">
          <h2>
            <GoGoal className="goal_icon" />{' '}
            <span className="status_text">To do</span>
          </h2>
          <div className="card">
            <div className="title">ddddsssssssssssssssssssssssssssssssssdd</div>
            <div className="bottom_container">
              <div className="buttons_container">
                <button className="tag_btn">HTML</button>
                <button className="tag_btn">CSS</button>
                <button className="tag_btn">JavaScript</button>
              </div>
              <span className="delete_icon">
                <TbTrashX />
              </span>
            </div>
          </div>
        </section>
        <section className="task_column">
          <h2>
            <GoGoal className="goal_icon" />{' '}
            <span className="status_text">To do</span>
          </h2>
          <div className="card">
            <div className="title">sjdhdds</div>
            <div className="bottom_container">
              <div className="buttons_container">
                <button className="tag_btn">HTML</button>
                <button className="tag_btn">CSS</button>
                <button className="tag_btn">JavaScript</button>
              </div>
              <span className="delete_icon">
                <TbTrashX />
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
