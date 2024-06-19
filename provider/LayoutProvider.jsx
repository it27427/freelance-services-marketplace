import { Flex } from 'antd';

const LayoutProvider = ({ children }) => {
  return (
    <Flex>
      <div>Sidebar</div>
      <main>{children}</main>
    </Flex>
  );
};

export default LayoutProvider;
