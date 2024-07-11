import React, { useState } from 'react';
import { CContainer, CForm, CFormInput, CButton } from '@coreui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  fullname: Yup.string()
  .required('*Họ và tên không thể trống')
  .matches(/^[a-z]+$/, '*Tên chỉ được chứa chữ cái')
  .min(5, '*Tên không được ít hơn 5 ký tự'),
});

const InputForm = () => {
    
    const handleSubmit = (values, { setSubmitting }) => {
        
    };

    return (
        <CContainer className='d-flex justify-content-center align-items-center p-5'>
            <Formik
                initialValues={{ fullname: '' }}
                validationSchema={Schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form>
                        <div className='mb-3'>
                            <Field
                                type="text"
                                name="fullname"
                                placeholder="Nhập tên nào bro..."
                                as={CFormInput}
                            />
                            <ErrorMessage name="fullname" component="div" className="text-danger" />
                        </div>

                        <CButton 
                            type="submit" 
                            className='text-white py-1 px-4 fw-bold rounded' 
                            style={{
                                background: "#F4841F",
                                outline: "none",
                            }}
                            disabled={isSubmitting || !isValid || !dirty}
                        >
                            Select
                        </CButton>
                    </Form>                    
                )}

            </Formik>


        </CContainer>
    );
}

export default InputForm;