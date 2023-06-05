import React from 'react';
import { Helmet } from 'react-helmet-async';

function MyLocation() {
  return (
    <>
      <Helmet>
        <title>MyLocation | Fine-Dust-Alert</title>
        <meta name="description" content="Fine-Dust-Alert에서 내 지역의 미세먼지를 확인하세요" />
      </Helmet>
      <div>MyLocation</div>
    </>
  );
}

export default MyLocation;
