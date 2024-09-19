import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [habit, setHabit] = useState({waterHabit:false, steps:0, activity:0});
  // const [data, setData] = useState(false);


  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    setHabit((prevHabit) => ({ ...prevHabit, [name]: type === "checkbox" ? checked : value}))

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(habit);
    setHabit({waterHabit:false, steps:0, activity:0});
    console.log(habit);
  }

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
        <form onSubmit={handleSubmit}>
          <ol>
            <li>
              <label>have to drunk water today?</label>
              <input type="checkbox" name="waterHabit" checked={habit.waterHabit} onChange={onChange}></input>
            </li>
            <li>
              <label>how many steps have you taken?</label>
              <input type="number" name="steps" value={habit.steps} onChange={onChange}></input>
            </li>
            <li>
              <label>how long have you been active today?</label>
              <input type="number" name="activity" value={habit.activity} onChange={onChange}></input>
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
