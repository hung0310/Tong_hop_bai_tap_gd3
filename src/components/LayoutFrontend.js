import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const LayoutFrontend = () => (
  <div className="layout-frontend">
    <header className="frontend-header">
      <h1 className='text-center'>Header LayoutFrontend</h1>
      <nav>
        <Link to="/"></Link>
        <Link to="/SignIn"></Link>
      </nav>
    </header>
    <main className="frontend-main">
      <Outlet />
    </main>
    <footer className="frontend-footer">
      <h1 className='text-center'>Footer LayoutFrontend</h1>
    </footer>
  </div>
);

export default LayoutFrontend;