import PageTitle from '@/components/PageTitle';
import connectDB from '@/config/mongodb.connection';

connectDB();

export default async function Home() {
  // const response = await getCurrentUserFromMongodb();
  // const currentuser = JSON.parse(JSON.stringify(response.data));
  // const { clerkUserId, name, email, phone, profilePic: imageURL } = currentuser;

  return (
    <div>
      <PageTitle title='Profile' />
    </div>
  );
}
