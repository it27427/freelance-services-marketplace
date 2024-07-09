'use client';
import Link from 'next/link';

import BrandLogo from '@/components/BrandLogo';
import MainMenu from '@/components/MainMenu';
import useUserStore, { UserStoreType } from '@/store/users-store';

const Sidebar = () => {
  const { loggedInUserData } = useUserStore() as UserStoreType;

  return (
    <aside className='bg-gray-200 h-screen flex flex-col lg:w-56 lg:fixed top-0 z-50 p-5'>
      <header className='flex flex-col items-center justify-center'>
        <Link href='/'>
          <BrandLogo />
        </Link>
        <span className='text-secondary text-sm'>{loggedInUserData?.name}</span>
      </header>

      <div className='mt-10'>
        <MainMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
