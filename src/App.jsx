import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import StartModal from "./components/StartModal/StartModal";
import ResourceLibrary from "./components/ResourceLibrary/ResourceLibrary";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { getRandomEncouragement } from "./utils/encouragementMessages";
import Profile from "./components/Profile/Profile";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [activeTask, setActiveTask] = useState(null);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [encouragementMessage, setEncouragementMessage] = useState("");

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

    setEncouragementMessage(getRandomEncouragement());
    setActiveTask(startedTask);
    setIsStartModalOpen(true);

    setTasks(tasks.map((task) => (task.id === taskId ? startedTask : task)));
  }

  function handleLogin(userData) {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  }

  function handleRegister(userData) {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setIsRegisterModalOpen(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  function handleResetPoints() {
    const shouldReset = window.confirm(
      "Are you sure you want to reset your points?"
    );

    if (shouldReset) {
      setPoints(0);
    }
  }

  function handleUpdateUser(updatedUser) {
    setCurrentUser(updatedUser);
  }

  return (
    <main className="app">
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
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
                onResetPoints={handleResetPoints}
              />
            ) : (
              <section className="login-required">
                <h2>Log in to start your Focus Flow</h2>
                <p>
                  Create tasks, break them into first steps, and track your
                  progress.
                </p>

                <button type="button" onClick={() => setIsLoginModalOpen(true)}>
                  Log In
                </button>
              </section>
            )
          }
        />

        <Route path="/resources" element={<ResourceLibrary />} />

        <Route path="*" element={<Navigate to="/" replace />} />

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile
                currentUser={currentUser}
                onUpdateUser={handleUpdateUser}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegister={handleRegister}
      />
      {isStartModalOpen && activeTask && (
        <StartModal
          task={activeTask}
          message={encouragementMessage}
          onClose={() => setIsStartModalOpen(false)}
        />
      )}
    </main>
  );
}

export default App;
