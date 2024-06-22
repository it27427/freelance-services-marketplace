import Link from 'next/link';

import Hamburger from '@/components/Hamburger';
import MobileLogo from '@/components/MobileLogo';

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-20 flex items-cente bg-tertiary px-4'>
      <nav className='flex items-center justify-between w-full'>
        <Link href='/'>
          <MobileLogo />
        </Link>

        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
