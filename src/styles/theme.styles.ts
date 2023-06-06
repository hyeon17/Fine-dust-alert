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
      font-family: 'Pretendard';
      src: url('@/assets/fonts/Pretendard-Regular.woff') format('woff');
    }
    font-family: 'Pretendard', sans-serif;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
