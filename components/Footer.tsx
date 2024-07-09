'use client';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='p-4 w-full lg:w-[calc(100%_-_14rem)] lg:ml-auto'>
      <p className='text-center'>
        Copyright &copy; <Copyright /> All rights reserved - TaskWave
      </p>
    </footer>
  );
};

export default Footer;
