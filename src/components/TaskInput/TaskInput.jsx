import { useState } from "react";
import "./TaskInput.css";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!taskName.trim()) {
      return;
    }

    onAddTask(taskName.trim());
    setTaskName("");
  }

  return (
    <section className="task-input">
      <h2 className="task-input__title">What do you need to start?</h2>

      <form className="task-input__form" onSubmit={handleSubmit}>
        <input
          className="task-input__field"
          type="text"
          placeholder="Example: Start laundry"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />

        <button className="task-input__button" type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskInput;
