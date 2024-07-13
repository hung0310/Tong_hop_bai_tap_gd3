import React from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";

const LayoutFrontend = () => (
  <div className="layout-frontend" id="top">
    <header className="frontend-header">
      <h1 className='text-center'>Header LayoutFrontend</h1>
      <nav>
        {/* <Link to="/"></Link>
        <Link to="/SignIn"></Link> */}
      </nav>
    </header>
    <main className="frontend-main">
      <Outlet />
      
      {/* <Link
          to="top"
          smooth={true}
          duration={1000}
          className="scroll-to-top-button"
          style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: '#F4841F',
              color: '#fff',
              padding: '10px 20px',
              cursor: "pointer"
          }}
      >
          <FontAwesomeIcon icon={faArrowUp} />
      </Link> */}
    </main>
    <footer className="frontend-footer">
      <h1 className='text-center'>Footer LayoutFrontend</h1>
    </footer>
  </div>
);

export default LayoutFrontend;