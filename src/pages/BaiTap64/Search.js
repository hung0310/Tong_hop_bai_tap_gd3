import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CContainer, CTable, CTableBody,
  CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow,
  CImage, CButton, CFormInput,
  CSpinner
} from '@coreui/react';
import logo from "../../assets/images/logo.png";
import useSearch from '../../hooks/useSearch';
import { blog_post_search } from '../../Apis/constantsApi';

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
      <Helmet>
        <title>SearchData</title>
      </Helmet>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center'>
            <CImage src={logo} alt="logo" fluid style={{ width: "200px", height: "200px" }} />
          </div>
          <div className='d-flex'>
            <h6 className='w-4 mt-3 fw-normal'>Search result: </h6>
            <h6 className='mr-5 mt-3'>{contentSearch}</h6>

            <CFormInput
              type='text'
              id='fsearch'
              placeholder='What do you want to search?'
              required
              onChange={handleInputChange}
            />
            <CButton
              type="submit"
              className='text-white py-2 px-5 fw-bold ml-5'
              style={{
                borderRadius: "8px",
                background: "#F4841F",
                outline: "none",
                border: "1px solid orange"
              }}
              onClick={() => handleSearch(contentSearch)}
            >
              Search
            </CButton>
          </div>
        </div>
      </div>
      <CContainer className='p-5'>
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
      </CContainer>
    </CContainer>
  );
}

export default StudentList; 