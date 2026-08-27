import "./Progress.css";

function Progress({ startedCount, completedCount, points, onResetPoints }) {
  return (
    <section className="progress">
      <h2>Today's Progress</h2>

      <div className="progress__stats">
        <div className="progress__stat">
          <p className="progress__number">{startedCount}</p>
          <p>Tasks Started</p>
        </div>

        <div className="progress__stat">
          <p className="progress__number">{completedCount}</p>
          <p>Tasks Completed</p>
        </div>

        <div className="progress__stat">
          <p className="progress__number">{points}</p>
          <p>Points</p>

          <button
            className="progress__reset"
            type="button"
            onClick={onResetPoints}
          >
            Reset Points
          </button>
        </div>
      </div>
    </section>
  );
}

export default Progress;
