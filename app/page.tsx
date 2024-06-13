import { UserOutlined } from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';

export default function Home() {
  return (
    <div className='p-12'>
      <Flex gap='small'>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Flex>

      <Input placeholder='large size' prefix={<UserOutlined />} />
    </div>
  );
}
