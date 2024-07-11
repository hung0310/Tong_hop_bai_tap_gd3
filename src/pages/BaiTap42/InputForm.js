import React from 'react';
import { CContainer, CFormInput, CButton, CForm } from '@coreui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  fullname: Yup.string()
    .required('*Họ và tên không thể trống')
    .matches(/^[a-z]+$/, '*Tên chỉ được chứa chữ cái')
    .min(5, '*Tên không được ít hơn 5 ký tự'),
});

const InputForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
    },
    validationSchema: Schema,
    onSubmit: (values, { setSubmitting }) => {
      
    },
  });

  return (
    <CContainer className='d-flex justify-content-center align-items-center p-5'>
      <CForm onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <CFormInput
            type="text"
            name="fullname"
            placeholder="Nhập tên nào bro..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
            invalid={formik.touched.fullname && formik.errors.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="text-danger">{formik.errors.fullname}</div>
          ) : null}
        </div>

        <CButton 
          type="submit" 
          className='text-white py-1 px-4 fw-bold rounded' 
          style={{
            background: "#F4841F",
            outline: "none",
          }}
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Select
        </CButton>
      </CForm>
    </CContainer>
  );
}

export default InputForm;