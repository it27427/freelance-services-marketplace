import Link from 'next/link';

import MobileMenu from '@/components/MobileMenu';
import MobileLogo from '@/components/MobileLogo';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between w-full'>
      <Link href='/'>
        <MobileLogo />
      </Link>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
