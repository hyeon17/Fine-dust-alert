import { Global, css } from '@emotion/react';
import reset from 'styled-reset';
import theme from '@/styles/theme.styles';

const GlobalStyle = () => (
  <Global
    styles={css`
      /* ${reset} */
      html,
      body {
        height: 100vh;
        ${theme.fonts.main};
        color: ${theme.colors.black};
        background-color: ${theme.colors.lightBlack};
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyle;
// todo: 여기 다시 잡아보기