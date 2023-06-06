import { css } from '@emotion/react';

const colors = {
  black: '#141414',
  white: '#ffffff',
  gray: '#8c8c8c',
  blue: '#1890ff',
  green: '#52c41a',
  yellow: '#ffeb3b',
  red: '#f5222d',
};

const fonts = {
  main: css`
    @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }
    font-family: 'Pretendard', sans-serif;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
