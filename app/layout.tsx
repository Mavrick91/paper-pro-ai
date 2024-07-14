import '@mantine/core/styles.css';
import './global.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import Header from '@/components/Header';

import { theme } from '../theme';

export const metadata = {
  title: 'PaperPro - AI-Powered Essay Feedback',
  description:
    'Get instant feedback on your essays with PaperPro. Improve your writing with AI-powered suggestions.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
