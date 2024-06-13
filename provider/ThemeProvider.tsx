import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default ThemeProvider;
