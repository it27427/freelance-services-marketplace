'use client';
import { TaskType } from '@/interfaces';

const Attachments = ({ task }: { task: TaskType }) => {

  const downloadAttachment = async (url: string) => {
  window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className='text-lg text-gray-600 font-bold'>Attachments</h2>

      <div className="flex flex-col gap-5">
        {
          task.attachments.map((attachment) => (
            <div key={attachment.name} className='flex flex-col gap-2 border-gray-200 border-solid p-3'>
              <span className='text-gray-500 font-semibold'>{attachment.name}</span>
              <span onClick={() => downloadAttachment(attachment.url)} className='text-blue-500 text-sm cursor-pointer'>Download</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Attachments;
