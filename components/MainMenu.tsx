'use client';
import { useAuth } from '@clerk/nextjs';
import { useParams, usePathname, useRouter } from 'next/navigation';

import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrList } from 'react-icons/gr';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';

const MainMenu = () => {
  const pathName = usePathname();
  const router = useRouter();
  const params = useParams();
  const iconSize = 15;
  const { signOut } = useAuth();

  const onLogout = async () => {
    await signOut();
    router.push('/sign-in');
  };

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: <AiOutlineHome size={iconSize} />,
      isActive: pathName === '/' || pathName === `/task/${params.id}`,
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
      isActive: pathName.includes('/profile/tasks'),
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: <PiSignOut size={iconSize} />,
      isActive: pathName === '/logout',
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
              if (item.name === 'Logout') {
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
