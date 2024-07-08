import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className='fixed inset-0 z-50 w-full h-screen flex items-center justify-center bg-sky-100'>
      <Spin size='large' />
    </div>
  );
};

export default Spinner;
