import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';

function Layout() {
  return (
    <>
      <main>
        <Outlet />
        <NavBar />
      </main>
    </>
  );
}

export default Layout;
