import { UserButton } from '@clerk/nextjs';

import connectDB from '@/config/mongodb.connection';
import { getCurrentUserFromMongodb } from '@/server-actions/users';
import { UserOutlined } from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';

connectDB();

export default async function Home() {
  const response = await getCurrentUserFromMongodb();
  const currentuser = JSON.parse(JSON.stringify(response.data));
  const { clerkUserId, name, email, phone, profilePic: imageURL } = currentuser;

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

      <ul>
        <li>
          <strong>Name: </strong> {name}
        </li>
        <li>
          <strong>Email: </strong> {email}
        </li>
        <li>
          <strong>Phone: </strong> {phone}
        </li>
        <li>
          <img src={imageURL} alt='Avatar' width='100' height='100' />
        </li>
      </ul>
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  );
}
