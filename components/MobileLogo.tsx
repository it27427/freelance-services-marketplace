import Logo from '@/assets/images/logo/logo.webp';

const MobileLogo = () => {
  return (
    <figure className='flex items-center justify-center w-16 h-16 rounded-full overflow-hidden m-0'>
      <img
        src={Logo.src}
        alt='Brand-Logo'
        className='w-full h-full object-cover'
      />
    </figure>
  );
};

export default MobileLogo;
