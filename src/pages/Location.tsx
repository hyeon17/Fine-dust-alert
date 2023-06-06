import React from 'react';
import { Helmet } from 'react-helmet-async';

function Location() {
  return (
    <>
      <Helmet>
        <title>Location | Fine-Dust-Alert</title>
        <meta name="description" content="Fine-Dust-Alert에서 미세먼지를 확인하세요" />
      </Helmet>
      <div>Location</div>
    </>
  );
}

export default Location;
