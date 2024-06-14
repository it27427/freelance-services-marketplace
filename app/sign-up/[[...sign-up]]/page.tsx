import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

import signUpThumb from '@/assets/images/auth/mobile-login.svg';

export default function Page() {
  return (
    <div className='flex items-center w-full bg-slate-200 h-screen overflow-hidden'>
      <div className='lg:w-1/2 hidden lg:flex h-full items-center justify-center'>
        <figure>
          <Image
            src={signUpThumb}
            alt='register-thumbnail'
            priority
            width='300'
            height='300'
            className='w-full h-full object-cover'
          />
        </figure>
      </div>
      <div className='flex items-center justify-center py-6 px-4 w-full lg:w-1/2 h-full lg:overflow-hidden'>
        <div className='lg:max-h-96 lg:overflow-y-scroll no-scrollbar'>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
