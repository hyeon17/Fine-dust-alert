import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme.styles.ts';
import GlobalStyle from '@/styles/Global.styles.ts';
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { worker } from '@/mock/browers.ts';
import { SWRConfig } from 'swr';
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then((res) => res.data.response.body),
      }}
    >
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ThemeProvider>
      </RecoilRoot>
    </SWRConfig>
  </React.StrictMode>,
);
