'use client';
import { useState } from 'react';

import { Button, Form, Input, Tag, message } from 'antd';
import LoadingButton from '@/components/LoadingButton';
import useUserStore, { UserStoreType } from '@/store/users-store';
import { updateUserInMongoDB } from '@/server-actions/users';

const ProfileForm = () => {
  const { loggedInUserData, SetLoggedInUserData }: any =
    useUserStore() as UserStoreType;
  const [skills, setSkills] = useState<string[]>(
    loggedInUserData?.skills || []
  );
  const [skillsValue, setSkillsValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddSkills = () => {
    const newSkills = skillsValue.split(',').map((skill) => skill.trim());
    setSkills([...skills, ...newSkills]);
    setSkillsValue('');
  };

  const handleClose = (removedSkill: string) => {
    const newSkills = [...skills];
    newSkills.filter((slill) => slill !== removedSkill);
    setSkills(newSkills);
  };

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

      <div className='flex flex-col gap-2'>
        <h5 className='text-sm m-0 font-normal'>
          Skills <span className='text-xs'>(Separated by commas)</span>
        </h5>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <Input
              value={skillsValue}
              onChange={(e) => setSkillsValue(e.target.value)}
              placeholder='Enter your skills'
            />
            <Button onClick={handleAddSkills} type='default'>
              Add
            </Button>
          </div>

          <div className='flex flex-wrap gap-3 lg:gap-5'>
            {skills.map((skill, index) => (
              <Tag
                key={index}
                closable
                onClose={() => handleClose(skill)}
                className='px-5 py-2 bg-secondary text-white m-0'
                color='secondary'
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <LoadingButton onClick={1} index={1} type='primary' htmlType='submit'>
          Submit
        </LoadingButton>
      </div>
    </Form>
  );
};

export default ProfileForm;
