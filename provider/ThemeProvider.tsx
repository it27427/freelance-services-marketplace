import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#102C57',
          borderRadius: 0,
        },
        components: {},
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
