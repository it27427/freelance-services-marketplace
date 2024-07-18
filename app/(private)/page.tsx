import connectDB from '@/config/mongodb.connection';
import HomeHeader from './_common/HomeHeader';
import Skillset from './_common/Skillset';
import Filters from './_common/Filters';
import TasksData from './_common/TasksData';

connectDB();

export default async function Home() {
  // const response = await getCurrentUserFromMongodb();
  // const currentuser = JSON.parse(JSON.stringify(response.data));
  // const { clerkUserId, name, email, phone, profilePic: imageURL } = currentuser;

  return (
    <div>
      <HomeHeader />

      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <Filters />
          <TasksData />
        </div>
        <div className='col-span-1'>
          <Skillset />
        </div>
      </div>
    </div>
  );
}
