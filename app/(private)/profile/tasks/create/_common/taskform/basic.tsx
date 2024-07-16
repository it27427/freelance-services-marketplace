import { useState } from 'react';
import { Form, Input } from 'antd';
import AddSkills from '@/components/AddSkills';

const Basic = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsValue, setSkillsValue] = useState('');

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

      <AddSkills
        skills={skills}
        setSkills={setSkills}
        skillsValue={skillsValue}
        setSkillsValue={setSkillsValue}
      />
    </>
  );
};

export default Basic;
