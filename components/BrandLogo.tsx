import Logo from '@/assets/images/logo/logo.webp';

const BrandLogo = () => {
  return (
    <figure className='flex items-center justify-center'>
      <img src={Logo.src} alt='Brand-Logo' />
    </figure>
  );
};

export default BrandLogo;
