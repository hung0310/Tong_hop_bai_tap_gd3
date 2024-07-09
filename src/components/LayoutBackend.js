import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const LayoutBackend = () => (
  <div className="layout-backend">
    <header className="backend-header">
      <h1 className='text-center'>Header LayoutBackend</h1>
      <nav>
        <Link to="/Dashboard"></Link>
        <Link to="/Profile"></Link>
      </nav>
    </header>
    <main className="backend-main">
      <Outlet />
    </main>
    <footer className="backend-footer">
      <h1 className='text-center'>Footer LayoutBackend</h1>
    </footer>
  </div>
);

export default LayoutBackend;