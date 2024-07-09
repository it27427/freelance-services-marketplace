import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className='bg-tertiary fixed top-0 left-0 z-50 w-full h-20 flex items-center lg:hidden'>
      <Navbar />
    </header>
  );
};

export default Header;
