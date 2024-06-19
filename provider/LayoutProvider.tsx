import { Flex } from 'antd';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex>
      <div>Sidebar</div>
      <main>{children}</main>
    </Flex>
  );
};

export default LayoutProvider;
