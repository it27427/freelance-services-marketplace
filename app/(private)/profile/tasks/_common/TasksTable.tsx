'use client';
import { useState } from 'react';
import { Table } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import { TaskType } from '@/interfaces';

const TasksTable = ({ tasks }: { tasks: TaskType[] }) => {
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
    },
    {
      title: 'Last Date To Place Bid',
      dataIndex: 'lastDateToPlaceBid',
      key: 'lastDateToPlaceBid',
    },
    {
      title: 'Bids Received',
      dataIndex: 'bidsReceived',
      key: 'bidsReceived',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div className='flex gap-5'>
          <DeleteOutlined className='w-5 h-5 cursor-pointer text-red-700' />
          <FormOutlined className='w-5 h-5 cursor-pointer text-yellow-700' />
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
      <Table dataSource={tasksWithKeys} columns={columns} />
    </div>
  );
};

export default TasksTable;
