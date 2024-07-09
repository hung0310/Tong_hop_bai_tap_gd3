import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found d-flex justify-content-center align-items-center">
    <div className='row'>
        <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        />
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <Link to="/" className="link-home">
                Go Home
            </Link>            
        </div>

    </div>
  </div>
);

export default NotFound;