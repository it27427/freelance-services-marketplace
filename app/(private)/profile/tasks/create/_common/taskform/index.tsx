'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Tabs, message } from 'antd';

import Basic from './basic';
import Description from './description';
import Attachments from './attachments';
import LoadingButton from '@/components/LoadingButton';

import { createNewTask, updateTask } from '@/server-actions/tasks';
import { uploadFileToFirebaseAndReturnUrl } from '@/helpers/media';
import useUserStore, { UserStoreType } from '@/store/users-store';

const TaskForm = ({
  initialValues = null,
  isEdit = false,
}: {
  initialValues?: any;
  isEdit?: boolean;
}) => {
  const { loggedInUserData } = useUserStore() as UserStoreType;
  const [skills, setSkills] = useState<string[]>(
    initialValues?.skillsRequired || []
  );
  const [skillsValue, setSkillsValue] = useState('');
  const [description, setDescription] = useState<string>(
    initialValues?.description || ''
  );
  const [isActive = true, setIsActive] = useState<boolean>(
    initialValues?.isActive
  );
  const [existingAttachments, setExistingAttachments] = useState<any[]>(
    initialValues?.attachments || []
  );
  const [newAttachments, setnewAttachments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const tabItems = [
    {
      key: '1',
      label: 'Basic',
      children: (
        <Basic
          skills={skills}
          setSkills={setSkills}
          skillsValue={skillsValue}
          setSkillsValue={setSkillsValue}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ),
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
          existingAttachments={existingAttachments}
          setExistingAttachments={setExistingAttachments}
        />
      ),
    },
  ];

  const router = useRouter();
  const user = loggedInUserData?._id;

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

      values.attachments = [...existingAttachments, ...newAttachmentsWithURL];
      values.skillsRequired = skills;
      values.description = description;
      values.user = user;

      let response = null;

      if (isEdit) {
        response = await updateTask({
          taskId: initialValues._id,
          taskData: values,
        });
      } else {
        response = await createNewTask(values);
      }

      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }

      router.push('/profile/tasks');
    } catch (error: any) {
      message.error(error?.message || 'Faild to create task!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-5'>
      <Form
        onFinish={handleSubmit}
        layout='vertical'
        autoComplete='off'
        initialValues={initialValues}
      >
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
