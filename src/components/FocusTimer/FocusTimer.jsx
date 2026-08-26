import { useEffect, useState } from "react";
import "./FocusTimer.css";

function FocusTimer({ task }) {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const isFinished = secondsLeft === 0;

  useEffect(() => {
    if (!isRunning || secondsLeft === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((currentSeconds) => currentSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, secondsLeft]);

  useEffect(() => {
    setIsRunning(false);
    setSecondsLeft(25 * 60);
  }, [task]);

  return (
    <section>
      <h2>Focus Timer</h2>

      {task ? (
        <div className="focus-timer__task">
          <p>Focusing on: {task.name}</p>
          <p>First step: {task.firstStep}</p>
        </div>
      ) : (
        <p>Start a task to begin a focus session.</p>
      )}

      <p className="focus-timer__time">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>

      <button
        type="button"
        onClick={() => setIsRunning(!isRunning)}
        disabled={!task || isFinished}
      >
        {isRunning ? "Pause" : "Start Timer"}
      </button>

      <button
        type="button"
        onClick={() => {
          setIsRunning(false);
          setSecondsLeft(25 * 60);
        }}
      >
        Reset
      </button>

      {isFinished && <p>Focus session complete! Nice work.</p>}
    </section>
  );
}

export default FocusTimer;
