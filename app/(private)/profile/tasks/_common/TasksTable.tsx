'use client';
import { useState } from 'react';
import { Table } from 'antd';

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
