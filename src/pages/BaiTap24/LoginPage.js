import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CForm, CButton, CContainer, CRow, CCol, CImage, CAlert, CFormInput, CFormLabel } from '@coreui/react';

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearMessages = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      setSuccess('Đăng nhập thành công...');
      setError('');
    } else {
      setError('Sai thông tin, vui lòng nhập lại...');
      setSuccess('');
      setEmail('');
      setPassword('');
    }
    clearMessages();
  };

  return (
    <CContainer fluid>
      <div className='d-flex justify-content-center align-items-center'>
        <CImage src={logo} alt="logo" fluid />
      </div>
      <CContainer className='p-4' style={{
        border: "1px solid #959CA9",
        borderRadius: "5px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <CRow>
          <CCol lg={6} md={12} className='px-5'>
            <CForm onSubmit={handleSubmit}>
              <h1>Đăng nhập</h1>
              <h6 className='fw-normal' style={{ color: "#959CA9" }}>
                Đăng nhập tài khoản của bạn
              </h6>
              {error && <CAlert color="danger">{error}</CAlert>}
              {success && <CAlert color="success">{success}</CAlert>}
              <div className='mt-5'>
                <div className="mb-3">
                  <CFormLabel htmlFor="formEmail">Email</CFormLabel>
                  <CFormInput
                    type="email"
                    id="formEmail"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="formPassword">Password</CFormLabel>
                  <CFormInput
                    type="password"
                    id="formPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
                <CButton type="submit" className='text-white py-2 px-5 fw-bold' style={{
                  borderRadius: "8px",
                  background: "#F4841F",
                  outline: "none",
                  border: "1px solid orange"
                }}>
                  Login
                </CButton>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-2 mx-2'>
                <h6 className='pt-2'>Bạn chưa có tài khoản?</h6>
                <Link to="/#" className='px-2'>Đăng ký</Link>
              </div>
            </CForm>
          </CCol>
          <CCol lg={6} className='d-none d-lg-block'>
            <CImage src={logo_sub} alt="logo_sub" fluid className="m-5" />
          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  );
}

export default LoginPage;