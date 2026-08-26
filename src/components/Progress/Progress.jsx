import "./Progress.css";

function Progress({ startedCount, completedCount, points }) {
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
        </div>
      </div>
    </section>
  );
}

export default Progress;
