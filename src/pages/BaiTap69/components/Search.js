import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CContainer, CButton, CFormInput
} from '@coreui/react';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from 'react-redux';
import { setQuery } from '../actions/searchAction';

function StudentList() {
  const dispatch = useDispatch();

  const [contentSearch, setContentSearch] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setContentSearch(value);
    dispatch(setQuery(value));
  };

  const handleSearch = () => {
    dispatch(setQuery(contentSearch));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <CContainer fluid>
      <div 
        className='p-3'
        style={{
          backgroundColor: '#ffc048',
          borderRadius: '20px'
        }}
      >
        <div className='row'>
          <div className='d-flex'>

            <CFormInput
              type='text'
              id='fsearch'
              placeholder='What do you want to search?'
              required
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <CButton
              type="submit"
              className='text-white px-3 fw-bold ml-2'
              style={{
                borderRadius: "8px",
                background: "#F4841F",
                outline: "none",
                border: "1px solid orange"
              }}
              onClick={() => handleSearch(contentSearch)}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </CButton>
          </div>
        </div>
      </div>
    </CContainer>
  );
}

export default StudentList; 