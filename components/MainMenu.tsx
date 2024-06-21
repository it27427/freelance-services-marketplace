'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrList } from 'react-icons/gr';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';

const MainMenu = () => {
  const pathName = usePathname();

  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? 'bg-secondary text-white flex items-center gap-3 p-3 rounded no-underline text-sm'
      : 'flex items-center gap-3 p-3 rounded no-underline text-sm';

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: <AiOutlineHome />,
      isActive: pathName === '/',
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <FiUser />,
      isActive: pathName === '/profile',
    },
    {
      name: 'Bids',
      href: '/profile/bids',
      icon: <GrList />,
      isActive: pathName === '/profile/bids',
    },
    {
      name: 'Tasks',
      href: '/profile/tasks',
      icon: <MdOutlineTaskAlt />,
      isActive: pathName === '/profile/tasks',
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: <PiSignOut />,
    },
  ];

  return (
    <ul className='flex flex-col gap-2 list-none m-0 p-0'>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded no-underline text-sm transition hover:bg-secondary hover:text-white ${
              item.isActive ? 'bg-secondary text-white' : 'text-slate-600'
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
