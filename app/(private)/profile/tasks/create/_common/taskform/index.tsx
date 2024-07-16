'use client';
import { Button, Form, Tabs } from 'antd';
import Basic from './basic';
import Description from './description';
import Attachments from './attachments';
import LoadingButton from '@/components/LoadingButton';

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
      <Form layout='vertical'>
        <Tabs defaultActiveKey='1' items={tabItems} />

        <div className='flex justify-end gap-6 mt-12'>
          <Button>Cancel</Button>

          <LoadingButton onClick={1} index={1} type='primary' htmlType='submit'>
            Save
          </LoadingButton>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
