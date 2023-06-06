import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSWR from 'swr';
import { ILocation } from '@/types/commonType';

function Location() {
  const { data, isLoading, error } = useSWR <ILocation, Error>('/location');

  const handleClick = async () => {
    try {
      await fetch('/location');
      console.log('Data fetched!', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Location | Fine-Dust-Alert</title>
        <meta name="description" content="Fine-Dust-Alert에서 미세먼지를 확인하세요" />
      </Helmet>
      <div>
        <button onClick={handleClick}>데이터 부르기</button>
      </div>
    </>
  );
}

export default Location;
