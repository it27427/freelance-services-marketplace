import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import { UserOutlined } from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';

export default async function Home() {
  const loggedInUser = await currentUser();

  const clerkID = loggedInUser?.id;
  const fullName = loggedInUser?.firstName + ' ' + loggedInUser?.lastName;
  const imageURL = loggedInUser?.imageUrl;
  const email = loggedInUser?.emailAddresses[0].emailAddress;
  const phone = loggedInUser?.phoneNumbers[0].phoneNumber;

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
          <strong>Name: </strong> {fullName}
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
