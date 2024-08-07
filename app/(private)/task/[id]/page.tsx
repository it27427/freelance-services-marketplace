import React from 'react';
import parse from 'html-react-parser';

import { getTaskById } from '@/server-actions/tasks';
import { getDateTimeFormat } from '@/helpers/formats';
import Attachments from './_common/attachments';
import PlaceBid from './_common/placebid';

const TaskDetailsPage = async ({ params }: { params: { id: string } }) => {
  const taskResponse = await getTaskById(params.id);

  if (!taskResponse.success) {
    return <span className='text-gray-500'>No Task Found!</span>;
  }

  const task = taskResponse.data;

  return (
    <div>
      <header className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl text-secondary font-bold m-0'>
            {task.title}
          </h2>

          <span className='text-gray-500 text-xs'>
            By {task.user.name} on {getDateTimeFormat(task.createdAt)}
          </span>
        </div>

        <div className='flex flex-wrap gap-5'>
          {task.skillsRequired.map((skill: string) => (
            <span className='bg-gray-200 text-black px-2 py-1 text-xs'>
              {skill}
            </span>
          ))}
        </div>
      </header>

      <hr className='my-5 border border-solid border-gray-300' />

      <div className='text-sm'>
        {
          parse(task.description)
        }
      </div>

      <hr className='my-5 border border-solid border-gray-300' />

      <Attachments task={task} />

      <hr className='my-5 border border-solid border-gray-300' />

      <PlaceBid task={task} />
    </div>
  );
};

export default TaskDetailsPage;
