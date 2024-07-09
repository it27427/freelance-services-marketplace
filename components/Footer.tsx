'use client';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='p-4 w-full lg:w-[calc(100%_-_15rem)] lg:ml-auto bg-secondary'>
      <p className='text-center text-white text-sm m-0'>
        Copyright &copy; <Copyright /> All rights reserved &mdash;{' '}
        <span className='font-bold'>TaskWave</span>
      </p>
    </footer>
  );
};

export default Footer;
