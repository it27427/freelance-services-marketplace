import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrList } from 'react-icons/gr';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';

import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: <AiOutlineHome />,
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <FiUser />,
    },
    {
      name: 'Bids',
      href: '/profile/bids',
      icon: <GrList />,
    },
    {
      name: 'Tasks',
      href: '/profile/tasks',
      icon: <MdOutlineTaskAlt />,
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: <PiSignOut />,
    },
  ];

  return (
    <aside className='p-5 w-full h-full sticky top-0 z-50 bg-gray-200'>
      <header className='flex flex-col items-center justify-center'>
        <Link href='/'>
          <BrandLogo />
        </Link>
        <span className='text-secondary text-sm'>Username</span>
      </header>

      <div className='mt-10'>
        <ul className='flex flex-col gap-2 list-none m-0 p-0'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className='flex items-center gap-3 p-3 rounded no-underline text-sm'
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
