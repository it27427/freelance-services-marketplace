'use client';
import { useState } from 'react';
import { Button, Form, Input, Switch, Tag } from 'antd';

const Basic = ({
  skills,
  setSkills,
  skillsValue,
  setSkillsValue,
  isActive,
  setIsActive,
}: {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
  skillsValue: string;
  setSkillsValue: React.Dispatch<React.SetStateAction<string>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please enter title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Sub Title'
        name='subTitle'
        rules={[{ required: true, message: 'Please enter sub title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Last Date to Place Bid'
        name='lastDateToPlaceBid'
        rules={[
          { required: true, message: 'Please enter last date to place bid' },
        ]}
      >
        <Input type='date' />
      </Form.Item>

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

      <div className='flex items-center gap-5 mt-8'>
        <label htmlFor='status' className='text-sm cursor-pointer'>
          Status{' '}
          <span className='text-xs'>(Switch to Activate/Deactivate)</span>
        </label>
        <Switch
          checked={isActive}
          defaultChecked={isActive}
          onChange={setIsActive}
          id='status'
        />
      </div>
    </>
  );
};

export default Basic;
