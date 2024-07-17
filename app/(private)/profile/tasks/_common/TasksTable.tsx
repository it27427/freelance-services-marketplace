'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { message, Table } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import { TaskType } from '@/interfaces';
import { getDateTimeFormat, getDateFormat } from '@/helpers/formats';
import { deleteTask } from '@/server-actions/tasks';

const TasksTable = ({ tasks }: { tasks: TaskType[] }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteTaskHandler = async (id: string) => {
    try {
      setLoading(true);
      const response = await deleteTask(id);
      if(response.success) {
        message.success('Task deleted successfully!');
      } else {
        message.error('Failed to delete task!');
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string) => getDateTimeFormat(text),
    },
    {
      title: 'Last Date To Place Bid',
      dataIndex: 'lastDateToPlaceBid',
      key: 'lastDateToPlaceBid',
      render: (text: string) => getDateFormat(text),
    },
    {
      title: 'Bids Received',
      dataIndex: 'bidsReceived',
      key: 'bidsReceived',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'status',
      render: (value: boolean) =>
        value ? (
          <span className='bg-green-700 text-white px-2 py-1 rounded-sm text-sm font-semibold'>
            Active
          </span>
        ) : (
          <span className='bg-red-700 text-white px-2 py-1 rounded-sm text-sm font-semibold'>
            Inactive
          </span>
        ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text: any, record: TaskType) => (
        <div className='flex gap-5'>
          <DeleteOutlined onClick={() => deleteTaskHandler(record._id)} className='w-5 h-5 cursor-pointer text-red-700' />
          <FormOutlined
            onClick={() => router.push(`/profile/tasks/edit/${record._id}`)}
            className='w-5 h-5 cursor-pointer text-yellow-700'
          />
        </div>
      ),
    },
  ];

  const tasksWithKeys = tasks.map((task) => ({
    ...task,
    key: task._id,
  }));

  return (
    <div>
      <Table loading={loading} dataSource={tasksWithKeys} columns={columns} />
    </div>
  );
};

export default TasksTable;
