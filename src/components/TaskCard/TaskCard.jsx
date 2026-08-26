import { useState } from "react";
import "./TaskCard.css";

function TaskCard({
  task,
  onToggleTask,
  onDeleteTask,
  onSaveFirstStep,
  onStartTask,
}) {
  const [firstStepInput, setFirstStepInput] = useState("");

  function handleFirstStepSubmit(event) {
    event.preventDefault();

    if (!firstStepInput.trim()) {
      return;
    }

    onSaveFirstStep(task.id, firstStepInput.trim());
    setFirstStepInput("");
  }

  return (
    <article className="task-card">
      <p className="task-card__name">
        {task.completed ? "✓ " : ""}
        {task.name}
      </p>

      {task.firstStep ? (
        <p className="task-card__first-step">First step: {task.firstStep}</p>
      ) : (
        <form onSubmit={handleFirstStepSubmit}>
          <input
            type="text"
            placeholder="What's the smallest first step?"
            value={firstStepInput}
            onChange={(event) => setFirstStepInput(event.target.value)}
          />

          <button type="submit">Save First Step</button>
        </form>
      )}

      <div className="task-card__actions">
        {task.firstStep && !task.started && (
          <button
            className="button button_start"
            type="button"
            onClick={() => onStartTask(task.id)}
          >
            Start
          </button>
        )}

        <button
          className="button button_complete"
          type="button"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="button button_delete"
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
