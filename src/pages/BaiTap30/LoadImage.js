import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CButton, CContainer, CRow, CCol, CImage, CFormInput, CFormSelect } from '@coreui/react';

import logo from "../../assets/images/logo.png";
import no_image from "../../assets/images/no_image.jpg";

const LoadImage = () => {
  const [selectedImage, setSelectedImage] = useState(no_image);
  const [temporaryImage, setTemporaryImage] = useState(null); 
  const [isOpen, setIsOpen] = useState(false); 

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTemporaryImage(reader.result); 
      };
      reader.readAsDataURL(file);
    } else {
      setTemporaryImage(no_image);
      alert('Vui lòng chọn ảnh đúng định dạng');
    }
  };

  const handleSubmit = () => {
    setSelectedImage(temporaryImage);
    setIsOpen(false); 
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <CContainer fluid>
      <Helmet>
        <title>LoadImage</title>
      </Helmet>
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
            <div className='mx-5 mb-5'>
              <CFormSelect custom onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
              </CFormSelect>
            </div>
            <h1 className='d-flex justify-content-center align-items-center'>{t('choose image')}</h1>
            <div className='d-flex justify-content-center align-items-center'>
              <CButton onClick={() => setIsOpen(true)} className='text-white py-2 px-5 fw-bold' style={{
                borderRadius: "8px",
                background: "#F4841F",
                outline: "none",
                border: "1px solid orange"
              }}>
                {t('choose image')}
              </CButton>
              <Popup open={isOpen} modal>
                <div className='row rounded' style={{
                  backgroundColor: "black",
                  opacity: "0.8",
                }}>
                  <h1 className='text-white d-flex justify-content-center align-items-center'>{t('choose your image')} ( *jpg / *png )</h1>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='row m-5'>
                      <CFormInput
                        type='file'
                        accept='.jpg, .jpeg, .png'
                        onChange={handleImageChange}
                        className='p-2'
                        placeholder={t('no photos have been selected yet')}
                      />
                      <div className='d-flex gap-5 mt-5 d-flex justify-content-center align-items-center'>
                        <CButton onClick={handleClose} className='text-white py-2 px-5 fw-bold' style={{
                          borderRadius: "8px",
                          background: "#F4841F",
                          outline: "none",
                          border: "1px solid orange"
                        }}>
                          {t('close')}
                        </CButton>
                        <CButton onClick={handleSubmit} className='text-white py-2 px-5 fw-bold' style={{
                          borderRadius: "8px",
                          background: "#F4841F",
                          outline: "none",
                          border: "1px solid orange"
                        }}>
                          {t('submit')}
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </div>
          </CCol>
          <CCol lg={6} md={12} className='px-5'>
            {selectedImage && (
              <CImage
                src={selectedImage}
                alt="selectedImage"
                className="img-fluid m-5"
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            )}
          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  );
};

export default LoadImage;