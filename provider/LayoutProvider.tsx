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

  const { SetLoggedInUserData, loggedInUserData } = useUserStore() as UserStoreType;
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
    if (isPrivate && !loggedInUserData) {
      getLoggedInUserData();
    }
  }, [pathName]);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className='hidden lg:flex lg:w-60 fixed top-0 z-40'>
        <Sidebar />
      </div>

      <main className='mt-20 lg:mt-0 w-full lg:w-[calc(100%_-_15rem)] lg:ml-auto min-h-screen'>
        <div className='p-5 lg:px-5 lg:py-10'>{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default LayoutProvider;
