
import connectDB from '@/config/mongodb.connection';
import { Button, Flex } from 'antd';

connectDB();

export default async function Home() {
  // const response = await getCurrentUserFromMongodb();
  // const currentuser = JSON.parse(JSON.stringify(response.data));
  // const { clerkUserId, name, email, phone, profilePic: imageURL } = currentuser;

  return (
    <div className='p-12'>
      <Flex gap='small'>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </Flex>
    </div>
  );
}
