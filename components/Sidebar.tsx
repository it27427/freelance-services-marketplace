import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  return (
    <aside className='p-5 w-full h-full sticky top-0 z-50 bg-gray-200'>
      <header className='flex flex-col gap-3 items-center justify-center'>
        <BrandLogo />
      </header>
    </aside>
  );
};

export default Sidebar;
