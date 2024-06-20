import Logo from '@/assets/images/logo/logo.webp';

const BrandLogo = () => {
  return (
    <figure className='flex items-center justify-center w-24 h-24 rounded-full overflow-hidden m-0'>
      <img
        src={Logo.src}
        alt='Brand-Logo'
        className='w-full h-full object-cover'
      />
    </figure>
  );
};

export default BrandLogo;
