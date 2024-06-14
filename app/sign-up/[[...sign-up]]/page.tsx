import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center justify-center py-6 px-4 min-h-screen'>
      <SignUp />
    </div>
  );
}
