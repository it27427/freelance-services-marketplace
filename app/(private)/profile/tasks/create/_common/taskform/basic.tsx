import React from 'react';
import { Form, Input } from 'antd';
import AddSkillsForm from '@/app/(private)/profile/_common/AddSkillsForm';

const Basic = () => {
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
        name='subtitle'
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

      <AddSkillsForm />
    </>
  );
};

export default Basic;
