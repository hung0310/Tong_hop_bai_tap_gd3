import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CContainer, CTable, CTableBody,
  CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow,
  CImage, CButton, CFormInput
} from '@coreui/react';
import logo from "../../assets/images/logo.png";
import useSearch from '../../hooks/useSearch';
import { blog_post_search } from '../../Apis/constantsApi';

function StudentList() {
  const [contentSearch, setContentSearch] = useState('');
  const [data, setData] = useState([]);

  const { handleSearch } = useSearch({ url: blog_post_search, setData });

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
      </CContainer>
    </CContainer>
  );
}

export default StudentList;