import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const primaryColor: string = '#102C57'; // #35374B
  const defaultButtonBg: string = '#D7D7D7';
  const linkColor: string = '#430A5D';
  const linkHoverColor: string = '#00224D';

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
            colorLink: linkColor,
            colorLinkHover: linkHoverColor,
            colorLinkActive: linkHoverColor,
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
