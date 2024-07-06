import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className='bg-tertiary sticky top-0 w-full h-20 flex items-center lg:hidden'>
      <Navbar />
    </header>
  );
};

export default Header;
