import { Flex } from 'antd';

const LayoutProvider = ({ children }) => {
  return (
    <Flex>
      <div>Sidebar</div>
      <div>{children}</div>
    </Flex>
  );
};

export default LayoutProvider;
