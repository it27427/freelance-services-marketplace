'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Tabs, message } from 'antd';

import Basic from './basic';
import Description from './description';
import Attachments from './attachments';
import LoadingButton from '@/components/LoadingButton';

import useUserStore, { UserStoreType } from '@/store/users-store';
import { uploadFileToFirebaseAndReturnUrl } from '@/helpers/media';
import { createNewTask } from '@/server-actions/tasks';

const TaskForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsValue, setSkillsValue] = useState('');
  const [description, setDescription] = useState<string>('');
  const [newAttachments, setnewAttachments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const tabItems = [
    {
      key: '1',
      label: 'Basic',
      children: <Basic skills={skills} setSkills={setSkills} skillsValue={skillsValue} setSkillsValue={setSkillsValue} />,
    },
    {
      key: '2',
      label: 'Description',
      children: (
        <Description
          description={description}
          setDescription={setDescription}
        />
      ),
    },
    {
      key: '3',
      label: 'Attachments',
      children: (
        <Attachments
          newAttachments={newAttachments}
          setnewAttachments={setnewAttachments}
        />
      ),
    },
  ];
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      let newAttachmentsWithURL = [...newAttachments];

      for (let i = 0; i < newAttachmentsWithURL.length; i++) {
        const file = newAttachmentsWithURL[i].file;
        const downloadURL = await uploadFileToFirebaseAndReturnUrl(file);
        newAttachmentsWithURL[i].url = downloadURL;
        delete newAttachmentsWithURL[i].file;
      }

      values.attachments = newAttachmentsWithURL;
      values.skillsRequired = skills;
      values.description = description;

      let response = null;

      response = await createNewTask(values);

      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-5'>
      <Form onFinish={handleSubmit} layout='vertical' autoComplete='off'>
        <Tabs defaultActiveKey='1' items={tabItems} />

        <div className='flex justify-end gap-6 mt-12'>
          <Button
            onClick={() => router.push('/profile/tasks')}
            disabled={loading}
          >
            Cancel
          </Button>

          <LoadingButton onClick={1} index={1} type='primary' htmlType='submit'>
            Save
          </LoadingButton>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
