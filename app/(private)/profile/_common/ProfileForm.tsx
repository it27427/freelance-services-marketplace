import { Form } from 'antd';

const ProfileForm = () => {
  return (
    <Form layout='vertical' autoComplete="off">
      <div className='grid col-3'>
        <Form.Item label='name' name='name'></Form.Item>
      </div>
    </Form>
  );
};

export default ProfileForm;
