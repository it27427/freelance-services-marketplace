import { getAllTasks } from '@/server-actions/tasks';
import React from 'react';

const TasksData = async () => {
  const response = await getAllTasks();
  let tasks = [];

  if (response.success) {
    tasks = response.data;
  }

  if (tasks.length === 0) {
    return <span className='text-gray-500'>No Task Found!</span>;
  }

  return (
    <div>
      <h1>TasksData</h1>
    </div>
  );
};

export default TasksData;
