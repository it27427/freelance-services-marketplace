'use client';
import { usePathname } from 'next/navigation';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { getCurrentUserFromMongodb } from '@/server-actions/users';
import useUserStore from '@/store/users-store';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isPrivate =
    !pathName.includes('sign-in') && !pathName.includes('sign-up');

  if (!isPrivate) {
    return <>{children}</>;
  }

  const { SetLoggedInUserData } = useUserStore() as any;

  const getLoggedInUserData = async () => {
    try {
      const response = await getCurrentUserFromMongodb();

      if (response.success) {
      } else {
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

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
