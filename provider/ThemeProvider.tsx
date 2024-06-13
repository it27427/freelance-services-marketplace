import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const primaryColor: string = '#102C57'; // #35374B

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
        components: {
          Button: {
            borderRadius: 0,
            controlOutline: 'none',
          },
          Input: {
            borderRadius: 200,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
