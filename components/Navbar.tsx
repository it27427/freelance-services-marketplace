import Link from 'next/link';

import MobileLogo from '@/components/MobileLogo';
import MobileMenu from '@/components/MobileMenu';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between w-full px-4'>
      <Link href='/'>
        <MobileLogo />
      </Link>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
