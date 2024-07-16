'use client';
import { useState } from 'react';

import { Form, Input, message } from 'antd';
import LoadingButton from '@/components/LoadingButton';
import useUserStore, { UserStoreType } from '@/store/users-store';
import { updateUserInMongoDB } from '@/server-actions/users';
import AddSkills from '@/components/AddSkills';

const ProfileForm = () => {
  const { loggedInUserData, SetLoggedInUserData }: any =
    useUserStore() as UserStoreType;
  const [skills, setSkills] = useState<string[]>(
    loggedInUserData?.skills || []
  );
  const [skillsValue, setSkillsValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      const response = await updateUserInMongoDB({
        userId: loggedInUserData._id,
        payload: { ...values, skills },
      });

      if (response.success) {
        message.success('Profile updated successfully!');
        SetLoggedInUserData(response.data);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const rules = [{ required: true, message: 'This field is required.' }];

  return (
    <Form
      layout='vertical'
      autoComplete='off'
      onFinish={handleSubmit}
      initialValues={loggedInUserData}
    >
      <div className='md:grid grid-cols-2 gap-5'>
        <Form.Item label='Name' name='name' rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label='Email' name='email' rules={rules}>
          <Input disabled />
        </Form.Item>
      </div>

      <div className='md:grid grid-cols-2 gap-5'>
        <Form.Item label='Phone' name='phone' rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label='Portfolio' name='portfolio' rules={rules}>
          <Input />
        </Form.Item>
      </div>

      <Form.Item label='Bio' name='bio' rules={rules}>
        <Input.TextArea rows={6} />
      </Form.Item>

      <AddSkills
        skills={skills}
        setSkills={setSkills}
        skillsValue={skillsValue}
        setSkillsValue={setSkillsValue}
      />

      <div className='flex justify-end'>
        <LoadingButton onClick={1} index={1} type='primary' htmlType='submit'>
          Submit
        </LoadingButton>
      </div>
    </Form>
  );
};

export default ProfileForm;
