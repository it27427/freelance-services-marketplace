'use client';

import useUserStore, { UserStoreType } from '@/store/users-store';

const HomeHeader = () => {
  const { loggedInUserData } = useUserStore() as UserStoreType;
  return (
    <>
      <h1 className='font-bold text-info text-2xl m-0'>
        Welcome, {loggedInUserData?.name}
      </h1>
      <span className='text-sm italic'>Here are the latest tasks...</span>
    </>
  );
};

export default HomeHeader;
