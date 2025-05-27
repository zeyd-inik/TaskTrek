import './App.scss';

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
        <hr />
      </header>
    </div>
  );
}

export default App;
