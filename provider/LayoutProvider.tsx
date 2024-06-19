import Sidebar from '@/components/Sidebar';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-5 h-screen'>
      <div className='h-full hidden lg:block lg:w-64'>
        <Sidebar />
      </div>
      <main className='p-5 lg:w-[calc(100%-16rem)]'>{children}</main>
    </div>
  );
};

export default LayoutProvider;
