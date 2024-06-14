import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center w-full bg-slate-200 h-screen overflow-hidden'>
      <div className='w-1/2'>test</div>
      <div className='flex items-center justify-center py-6 px-4 w-1/2 h-screen overflow-hidden'>
        <SignIn />
      </div>
    </div>
  );
}
