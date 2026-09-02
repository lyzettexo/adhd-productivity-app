import { useEffect, useState } from "react";
import "./FocusTimer.css";

function FocusTimer({ task }) {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
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
    setSecondsLeft(sessionLength);
  }, [task, sessionLength]);

  function handleIncreaseTime() {
    const newLength = Math.min(sessionLength + 5 * 60, 60 * 60);

    setSessionLength(newLength);
    setSecondsLeft(newLength);
  }

  function handleDecreaseTime() {
    const newLength = Math.max(sessionLength - 5 * 60, 5 * 60);

    setSessionLength(newLength);
    setSecondsLeft(newLength);
  }

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

      <div className="focus-timer__controls">
        <button
          className="focus-timer__adjust-button"
          type="button"
          onClick={handleDecreaseTime}
          disabled={isRunning || secondsLeft <= 5 * 60}
        >
          − 5 min
        </button>

        <button
          type="button"
          className="focus-timer__adjust-button"
          onClick={handleIncreaseTime}
          disabled={isRunning || secondsLeft >= 60 * 60}
        >
          + 5 min
        </button>
      </div>

      <div className="focus-timer__actions">
        <button
          className="focus-timer__start-button"
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          disabled={!task || isFinished}
        >
          {isRunning ? "Pause" : "Start Timer"}
        </button>

        <button
          className="focus-timer__reset-button"
          type="button"
          onClick={() => {
            setIsRunning(false);
            setSecondsLeft(sessionLength);
          }}
        >
          Reset
        </button>
      </div>

      {isFinished && <p>Focus session complete! Nice work.</p>}
    </section>
  );
}

export default FocusTimer;
