import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

import signUpThumb from '@/assets/images/auth/mobile-login.svg';

export default function Page() {
  return (
    <div className='flex items-center w-full bg-white min-h-screen lg:h-screen overflow-hidden'>
      <div className='lg:w-1/2 hidden lg:flex bg-slate-100 h-full items-center justify-center'>
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
        <div className='lg:max-h-96 no-scrollbar lg:overflow-y-scroll'>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
