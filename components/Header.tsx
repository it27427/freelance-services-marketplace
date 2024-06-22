import Link from 'next/link';

import Hamburger from '@/components/Hamburger';
import MobileLogo from '@/components/MobileLogo';

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-20 flex items-cente bg-tertiary'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <MobileLogo />
        </Link>

        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
