'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrList } from 'react-icons/gr';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';

const MainMenu = () => {
  const pathName = usePathname();
  const router = useRouter();
  const iconSize = 15;

  const onLogout = () => {
    console.log('Test');
  };

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: <AiOutlineHome size={iconSize} />,
      isActive: pathName === '/',
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <FiUser size={iconSize} />,
      isActive: pathName === '/profile',
    },
    {
      name: 'Bids',
      href: '/profile/bids',
      icon: <GrList size={iconSize} />,
      isActive: pathName === '/profile/bids',
    },
    {
      name: 'Tasks',
      href: '/profile/tasks',
      icon: <MdOutlineTaskAlt size={iconSize} />,
      isActive: pathName === '/profile/tasks',
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: <PiSignOut size={iconSize} />,
    },
  ];

  return (
    <ul className='flex flex-col gap-2 list-none m-0 p-0'>
      {menuItems.map((item, index) => (
        <li key={index}>
          <button
            className={`flex items-center gap-3 w-full p-3 rounded no-underline text-sm transition hover:bg-secondary hover:text-white ${
              item.isActive ? 'bg-secondary text-white' : 'text-slate-600'
            }`}
            type='button'
            onClick={() => {
              if (item.name === 'logout') {
                onLogout();
              } else {
                router.push(item.href);
              }
            }}
          >
            {item.icon}
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
