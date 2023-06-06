import React from 'react';
import { Helmet } from 'react-helmet-async';

function Map() {
  return (
    <>
      <Helmet>
        <title>Map | Fine-Dust-Alert</title>
        <meta name="description" content="지도에서 지역을 선택하세요." />
      </Helmet>
      <div>Map</div>
    </>
  );
}

export default Map;
