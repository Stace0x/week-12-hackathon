import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [habit, setHabit] = useState({
    waterHabit: false,
    steps: 0,
    activity: 0,
  });
  // const [data, setData] = useState(false);
  const [trackedData, setTrackedData] = useState([]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    setHabit((prevHabit) => ({
      ...prevHabit,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackedData((prevHabits) => [...prevHabits, habit]);

    setHabit({ waterHabit: false, steps: 0, activity: 0 });
  };

  return (
    <>
      <h1>My Habit Tracker</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <ol>
            <li>
              <label className="lable-text">have to drunk water today?</label>
              <input
                type="checkbox"
                name="waterHabit"
                checked={habit.waterHabit}
                onChange={onChange}
              ></input>
            </li>
            <li>
              <label className="lable-text">
                how many steps have you taken?
              </label>
              <input
                type="number"
                name="steps"
                value={habit.steps}
                onChange={onChange}
              ></input>
              {/* now render this data back onto the page */}
            </li>
            <li>
              <label className="lable-text">
                how long have you been active today?
              </label>
              <input
                type="number"
                name="activity"
                value={habit.activity}
                onChange={onChange}
              ></input>
            </li>
          </ol>

          <div>
            <button>add today</button>
          </div>
        </form>
      </section>

      <section className="card-container">
        <h2>Logged Activities</h2>
        <section className="cards">
          {trackedData.length === 0 ? (
            <p>No habits have been logged yet.</p>
          ) : (
            trackedData.map((log, index) => (
              <div key={index} className="habit-card">
                <h3>Habit {index + 1}</h3>
                <p>Drank Water: {log.waterHabit ? "Yes" : "No"}</p>
                <p>Steps Taken: {log.steps}</p>
                <p>Minutes of Activity: {log.activity}</p>
              </div>
            ))
          )}
        </section>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
