import Progress from "../Progress/Progress";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import FocusTimer from "../FocusTimer/FocusTimer";

function Main({
  startedCount,
  completedCount,
  points,
  tasks,
  activeTask,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onSaveFirstStep,
  onStartTask,
  onResetPoints,
}) {
  return (
    <>
      <Progress
        startedCount={startedCount}
        completedCount={completedCount}
        points={points}
        onResetPoints={onResetPoints}
      />

      <TaskInput onAddTask={onAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
        onSaveFirstStep={onSaveFirstStep}
        onStartTask={onStartTask}
      />

      <FocusTimer task={activeTask} />
    </>
  );
}

export default Main;
