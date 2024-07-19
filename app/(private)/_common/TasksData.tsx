import { getDateTimeFormat } from '@/helpers/formats';
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
        <div className='border border-solid border-gray-300 p-5 flex flex-col gap-4'>
          <hgroup className='flex flex-col gap-2'>
            <h2 className='text-lg text-secondary m-0'>{task.title}</h2>
            <h5 className='text-sm text-gray-500 m-0'>{task.subTitle}</h5>
          </hgroup>

          <div className='flex flex-wrap gap-5'>
            {task.skillRequired.map((skill: string) => (
              <span className='bg-secondary text-white px-2 py-1 text-xs'>
                {skill}
              </span>
            ))}
          </div>

          <div className='flex justify-end'>
            <span className='text-gray-500 text-xs'>
              By {task.user.name} on {getDateTimeFormat(task.createdAt)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksData;
