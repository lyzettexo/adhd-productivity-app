import TaskCard from "../TaskCard/TaskCard";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onSaveFirstStep,
  onStartTask,
}) {
  return (
    <section>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onSaveFirstStep={onSaveFirstStep}
          onStartTask={onStartTask}
        />
      ))}
    </section>
  );
}

export default TaskList;
