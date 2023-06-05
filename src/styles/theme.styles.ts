import { css } from '@emotion/react';

const colors = {
  black: '#141414',
  lightBlack: '#1f1f1f',
  white: '#ffffff',
  gray: '#8c8c8c',
  blue: '#1890ff',
  green: '#52c41a',
  purple: '#722ed1',
  magenta: '#eb2f96',
  red: '#f5222d',
};

const fonts = {
  main: css`
    @font-face {
      font-family: 'Pretendard';
      src: url('@/assets/fonts/Pretendard-Regular.woff') format('woff');
      /* 추가적인 폰트 스타일 설정도 가능합니다 */
      /* font-weight: normal;
      font-style: normal; */
    }
    font-family: 'Pretendard', sans-serif;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
