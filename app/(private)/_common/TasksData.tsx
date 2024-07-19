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
    <div className='flex flex-col gap-7'>
      {tasks.map((task: any) => (
        <div>
          <h2 className='text-lg text-secondary m-0'>{task.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default TasksData;
