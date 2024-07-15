'use client';
import { useState } from 'react';

import { Form, Button, Input, Tag, message } from 'antd';
import useUserStore, { UserStoreType } from '@/store/users-store';

const AddSkillsForm = () => {
  const { loggedInUserData }: any = useUserStore() as UserStoreType;
  const [skills, setSkills] = useState<string[]>(
    loggedInUserData?.skills || []
  );
  const [skillsValue, setSkillsValue] = useState('');

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

  const rules = [{ required: true, message: 'This field is required.' }];

  return (
    <>
      <div className='flex flex-col gap-2 w-full'>
        <h5 className='text-sm m-0 font-normal'>
          Skills <span className='text-xs'>(Separated by commas)</span>
        </h5>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex gap-5 w-full'>
            <Form.Item rules={rules} className='flex-1'>
              <Input
                value={skillsValue}
                onChange={(e) => setSkillsValue(e.target.value)}
                placeholder='Enter your skills'
              />
            </Form.Item>
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
    </>
  );
};

export default AddSkillsForm;
