"use client";

import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const addOrUpdateTask = (task: Task) => {
    setTasks((prevTasks) =>
      task.id
        ? prevTasks.map((existingTask) =>
            existingTask.id === task.id ? { ...task } : existingTask
          )
        : [...prevTasks, { ...task, id: uuidv4() }]
    );
    setCurrentTask(null);
  };

  const editTask = (task: Task) => {
    setCurrentTask({ ...task });
  };

  const deleteTask = (id: string) => {
    if (!id) {
      throw new Error('Task ID is required to delete a task');
    }
    setTasks((prevTasks) => prevTasks.filter((task) => task?.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
      <TaskForm onSubmit={addOrUpdateTask} initialData={currentTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default HomePage;
