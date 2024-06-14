'use client';
import signInThumb from '@/assets/images/auth/login.svg';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex items-center w-full bg-slate-200 h-screen overflow-hidden'>
      <div className='lg:w-1/2 hidden lg:flex h-full items-center justify-center'>
        <figure>
          <Image
            src={signInThumb}
            alt='login-thumbnail'
            priority
            width='300'
            height='300'
            className='w-full h-full object-cover'
          />
        </figure>
      </div>
      <div className='flex items-center justify-center py-6 px-4 w-full lg:w-1/2 h-full overflow-hidden'>
        <SignIn />
      </div>
    </div>
  );
}
