import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const primaryColor: string = '#102C57'; // #35374B
  const defaultButtonBg: string = '#D7D7D7';
  const lihkColor: string = '#401F71';

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorPrimary: primaryColor,
        },
        components: {
          Button: {
            controlHeight: 44,
            controlOutline: 'none',
            defaultBg: defaultButtonBg,
            defaultHoverBg: defaultButtonBg,
            defaultHoverBorderColor: 'none',
            colorLink: lihkColor,
          },
          Input: {
            controlHeight: 44,
            controlOutline: 'none',
            activeShadow: 'none',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
