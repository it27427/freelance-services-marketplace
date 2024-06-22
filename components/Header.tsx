import MobileLogo from '@/components/MobileLogo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-20 flex items-center bg-secondary'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <MobileLogo />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
