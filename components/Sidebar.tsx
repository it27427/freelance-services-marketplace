import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  return (
    <aside className='p-5 w-full h-full sticky top-0 z-50 bg-gray-200'>
      <header>
        <BrandLogo />
      </header>
    </aside>
  );
};

export default Sidebar;
