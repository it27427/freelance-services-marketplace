'use client';
import { Form, Tabs } from 'antd';
import Basic from './basic';
import Description from './description';
import Attachments from './attachments';

const TaskForm = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Basic',
      children: <Basic />,
    },
    {
      key: '2',
      label: 'Description',
      children: <Description />,
    },
    {
      key: '3',
      label: 'Attachments',
      children: <Attachments />,
    },
  ];

  return (
    <div className='mt-5'>
      <Form>
        <Tabs defaultActiveKey='1' items={tabItems} />
      </Form>
    </div>
  );
};

export default TaskForm;
