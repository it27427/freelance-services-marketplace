'use client';
import React from 'react';

import { Drawer } from 'antd';
import { FaHamburger } from 'react-icons/fa';

import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';

const MobileMenu = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setShowSidebar(true)}
        className='w-12 h-12 bg-secondary rounded'
      >
        <FaHamburger className='text-white text-lg' />
      </Button>
      <Drawer
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
        placement='left'
      >
        <Sidebar />
      </Drawer>
    </>
  );
};

export default MobileMenu;
