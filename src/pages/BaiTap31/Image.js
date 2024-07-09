import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {CContainer, CRow, CCol, CImage } from '@coreui/react';

import logo           from "../../../src/assets/images/logo.png";

const Image = () => {

  return (
    <CContainer fluid>
      <Helmet>
        <title>Image</title>
      </Helmet>

      <CContainer className='p-4' style={{
        border: "1px solid #959CA9",
        borderRadius: "5px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <CRow>
          <CCol lg={6} md={12} className='px-5'>
            <CImage src={logo} alt="logo" fluid />
          </CCol>
          <CCol lg={6} md={12} className='px-5'>
            <CImage src="/assets/images/logo_sub_admin.png" alt="logo" fluid />
          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  );
};

export default Image;