'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
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
    <div className='overflow-x-hidden'>
      <div className='hidden lg:flex '>
        <Sidebar />
      </div>

      <Header />

      <main className='p-5 lg:px-5 lg:py-10 lg:w-[calc(100%_-_14rem)] lg:ml-auto min-h-screen'>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default LayoutProvider;
