import Sidebar from '@/components/Sidebar';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-5 h-screen w-full overflow-hidden'>
      <div className='h-full lg:w-56 hidden lg:flex'>
        <Sidebar />
      </div>
      <main className='p-5 w-full lg:w-[calc(100%-14rem)] ml-auto h-full overflow-y-scroll'>
        {children}
      </main>
    </div>
  );
};

export default LayoutProvider;
