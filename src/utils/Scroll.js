import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";

const Scroll = () => {
  return (
    <Link
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
    </Link>
  );
}

export default Scroll;