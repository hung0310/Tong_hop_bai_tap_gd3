import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CContainer, CTable, CTableBody,
  CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow,
  CImage, CButton, CFormInput,
  CSpinner
} from '@coreui/react';
import useSearch from '../../../hooks/useSearch';
import { blog_post_search } from '../../../Apis/constantsApi';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function StudentList() {
  const [contentSearch, setContentSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [notFound, setNotFound] = useState(false);

  const { handleSearch } = useSearch({ url: blog_post_search, setData, setNotFound, setLoading });

  useEffect(() => {
    handleSearch(''); 
  }, [handleSearch]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setContentSearch(value);
    handleSearch(value); 
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
      {/* <CContainer className='p-5'>
        {loading ? (
          <div className="text-center">
            <CSpinner color="primary" /> 
            <p>Loading...</p>
          </div>
        ) : notFound ? (
          <div className='d-flex justify-content-center align-items-center'>
            <h3 className='mt-5'>Not found anything!</h3>
          </div>
        ) : (
          <CTable>
            <CTableHead color='dark'>
              <CTableRow>
                <CTableHeaderCell scope='col'>STT</CTableHeaderCell>
                <CTableHeaderCell scope='col'>Description</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((data, index) => (
                <CTableRow key={index} striped hover>
                  <CTableDataCell>{index + 1}</CTableDataCell>
                  <CTableDataCell>{data.title}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        )}
      </CContainer> */}
    </CContainer>
  );
}

export default StudentList; 