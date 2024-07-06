import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 h-screen w-full overflow-hidden'>
      <div className='hidden lg:flex'>
        <Sidebar />
      </div>

      <Header />
      
      <main className='p-5 w-full lg:w-[calc(100%-14rem)] ml-auto h-full overflow-y-scroll'>
        {children}
      </main>
    </div>
  );
};

export default LayoutProvider;
