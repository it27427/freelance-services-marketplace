import Link from 'next/link';

import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  return (
    <aside className='p-5 w-full h-full sticky top-0 z-50 bg-gray-200'>
      <header className='flex flex-col gap-3 items-center justify-center'>
        <Link href='/'>
          <BrandLogo />
        </Link>
      </header>
    </aside>
  );
};

export default Sidebar;
