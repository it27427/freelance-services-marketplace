import Link from 'next/link';

import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  return (
    <aside className='p-5 w-full h-full sticky top-0 z-50 bg-gray-200'>
      <header className='flex flex-col items-center justify-center'>
        <Link href='/'>
          <BrandLogo />
        </Link>
        <span className='text-secondary text-sm'>Username</span>
      </header>
    </aside>
  );
};

export default Sidebar;
