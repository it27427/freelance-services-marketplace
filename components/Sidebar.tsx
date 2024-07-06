'use client';
import Link from 'next/link';

import BrandLogo from '@/components/BrandLogo';
import MainMenu from '@/components/MainMenu';

const Sidebar = () => {
  return (
    <aside className='bg-gray-200 h-screen lg:w-56 flex flex-col sticky top-0 z-50 p-5 '>
      <header className='flex flex-col items-center justify-center'>
        <Link href='/'>
          <BrandLogo />
        </Link>
        <span className='text-secondary text-sm'>Username</span>
      </header>

      <div className='mt-10'>
        <MainMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
