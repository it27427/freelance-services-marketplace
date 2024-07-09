import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className='fixed inset-0 z-50 w-full h-screen flex items-center justify-center bg-gray-100'>
      <Spin size='large' />
    </div>
  );
};

export default Spinner;
