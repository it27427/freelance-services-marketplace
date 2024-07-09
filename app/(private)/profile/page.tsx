import PageTitle from '@/components/PageTitle';
import ProfileForm from './_common/ProfileForm';

const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-6'>
      <PageTitle title='Profile' />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
