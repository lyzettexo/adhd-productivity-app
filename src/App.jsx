import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import StartModal from "./components/StartModal/StartModal";
import ResourceLibrary from "./components/ResourceLibrary/ResourceLibrary";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [activeTask, setActiveTask] = useState(null);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");

    return savedPoints ? JSON.parse(savedPoints) : 0;
  });

  const startedCount = tasks.filter((task) => task.started).length;

  const completedCount = tasks.filter((task) => task.completed).length;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  function handleAddTask(taskName) {
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      firstStep: "",
      started: false,
      completed: false,
      completionRewardEarned: false,
      startRewardEarned: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggleTask(taskId) {
    const taskToToggle = tasks.find((task) => task.id === taskId);

    if (!taskToToggle.completed && !taskToToggle.completionRewardEarned) {
      setPoints((currentPoints) => currentPoints + 10);
    }

    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              completionRewardEarned: !task.completed
                ? true
                : task.completionRewardEarned,
            }
          : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleSaveFirstStep(taskId, firstStep) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, firstStep: firstStep } : task
      )
    );
  }

  function handleStartTask(taskId) {
    const taskToStart = tasks.find((task) => task.id === taskId);

    const startedTask = {
      ...taskToStart,
      started: true,
      startRewardEarned: true,
    };

    if (!taskToStart.startRewardEarned) {
      setPoints((currentPoints) => currentPoints + 5);
    }

    setActiveTask(startedTask);
    setIsStartModalOpen(true);

    setTasks(tasks.map((task) => (task.id === taskId ? startedTask : task)));
  }

  return (
    <main className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              startedCount={startedCount}
              completedCount={completedCount}
              points={points}
              tasks={tasks}
              activeTask={activeTask}
              onAddTask={handleAddTask}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onSaveFirstStep={handleSaveFirstStep}
              onStartTask={handleStartTask}
            />
          }
        />

        <Route path="/resources" element={<ResourceLibrary />} />
      </Routes>

      <Footer />

      {isStartModalOpen && activeTask && (
        <StartModal
          task={activeTask}
          onClose={() => setIsStartModalOpen(false)}
        />
      )}
    </main>
  );
}

export default App;
