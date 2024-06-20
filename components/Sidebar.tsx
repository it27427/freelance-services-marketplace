import Link from 'next/link';

import BrandLogo from '@/components/BrandLogo';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: '',
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: '',
    },
    {
      name: 'Bids',
      href: '/profile/bids',
      icon: '',
    },
    {
      name: 'Tasks',
      href: '/profile/tasks',
      icon: '',
    },
    {
      name: 'Logout',
      href: '/logout',
      icon: '',
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

      <div className='mt-20'>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
