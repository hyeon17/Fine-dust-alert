import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Location</button>
      <button onClick={() => navigate('/map')}>Map</button>
      <button onClick={() => navigate('/favorite')}>Favorite</button>
    </div>
  );
}

export default NavBar;
