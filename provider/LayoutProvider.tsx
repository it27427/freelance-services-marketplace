'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Spinner from '@/components/Spinner';
import { getCurrentUserFromMongodb } from '@/server-actions/users';
import useUserStore, { UserStoreType } from '@/store/users-store';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const isPrivate =
    !pathName.includes('sign-in') && !pathName.includes('sign-up');

  if (!isPrivate) {
    return <>{children}</>;
  }

  const { SetLoggedInUserData } = useUserStore() as UserStoreType;
  const [loading, setLoading] = useState(false);

  const getLoggedInUserData = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUserFromMongodb();

      if (response.success) {
        SetLoggedInUserData(response.data);
      } else {
        console.error(response.message);
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isPrivate) {
      getLoggedInUserData();
    }
  }, []);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row gap-5 h-screen w-full overflow-hidden'>
      <div className='hidden lg:flex'>
        <Sidebar />
      </div>

      <Header />

      <main className='px-5 py-10 flex-1 overflow-y-scroll min-h-screen'>
        {children}
      </main>
    </div>
  );
};

export default LayoutProvider;
