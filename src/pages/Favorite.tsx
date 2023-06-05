import React from 'react';
import { Helmet } from 'react-helmet-async';

function Favorite() {
  return (
    <>
      <Helmet>
        <title>Favorite | Fine-Dust-Alert</title>
        <meta name="description" content="Fine-Dust-Alert에서 즐겨찾는 지역의 미세먼지를 확인하세요" />
      </Helmet>
      <div>Favorite</div>
    </>
  );
}

export default Favorite;
