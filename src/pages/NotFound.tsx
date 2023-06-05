import React from 'react';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>NotFound | Fine-Dust-Alert</title>
        <meta name="description" content="Fine-Dust-Alert에서 요청하신 페이지가 존재하지 않습니다." />
      </Helmet>
      <div>NotFound</div>
    </>
  );
}

export default NotFound;
