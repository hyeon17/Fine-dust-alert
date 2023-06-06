import { css } from '@emotion/react';
import theme from '@/styles/theme.styles';
import emotionReset from 'emotion-reset';

const GlobalStyle = css`
  ${emotionReset}
  html,
  body {
    height: 100vh;
    ${theme.fonts.main};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
