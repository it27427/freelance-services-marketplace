'use client';

import { FaHamburger } from 'react-icons/fa';

import Button from '@/components/Button';

const Hamburger = () => {
  const handleClick = () => {
    console.log('Hamburger Clicked!');
  };

  return (
    <Button onClick={handleClick} className='w-12 h-12 bg-black'>
      <FaHamburger className='text-white text-lg' />
    </Button>
  );
};

export default Hamburger;
