import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, seInput] = useState(false);


  const onChange {(e) => {
    setInput(e.target.input);
  }}





  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Habit Tracker</h1>
      <section>
        <form onSubmit={}>
          <ol>
            <li>
              <label>have to drunk water today?</label>
              <input type="checkbox"></input>
            </li>
            <li>
              <label>how many steps have you taken?</label>
              <input type="number"></input>
            </li>
            <li>
              <label>how long have you been active today?</label>
              <input type="number"></input>
            </li>
          </ol>

          <div>
            <button>add today</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
