import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>My Location</button>
      <button onClick={() => navigate('/all')}>All Location</button>
      <button onClick={() => navigate('/favorite')}>Favorite</button>
    </div>
  );
}

export default NavBar;
