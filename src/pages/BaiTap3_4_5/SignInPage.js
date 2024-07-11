import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Email không thể trống'),
  password: Yup.string().required('Mật khẩu không thể trống'),
  fullname: Yup.string().required('Họ và tên không thể trống'),
  age: Yup.number()
    .required('Tuổi không thể trống')
    .positive('Tuổi phải là số dương')
    .integer('Tuổi phải là số nguyên')
    .min(1, 'Tuổi phải lớn hơn 0'),
  address: Yup.string().required('Địa chỉ không thể trống').max(20, 'Địa chỉ không được vượt quá 20 ký tự'),
});

function SignInPage() {
  const initialValues = {
    email: '',
    password: '',
    fullname: '',
    age: '',
    address: '',
    recaptchaToken: null,
  };

  const navigate = useNavigate();
  const [id_user, setIdUser] = useState(0);
  const [gender, setGender] = useState('Nam');

  useEffect(() => {
    // const storedIdUser = sessionStorage.getItem('id_user');
    const storedIdUser = localStorage.getItem('id_user');
    if (storedIdUser) {
      setIdUser(parseInt(storedIdUser));
    }
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    if (!values.recaptchaToken) {
      const newIdUser = id_user + 1;
      setIdUser(newIdUser);

      const userData = {
        id: newIdUser,
        email: values.email,
        password: values.password,
        fullname: values.fullname,
        gender,
        age: values.age,
        address: values.address,
      };

      // Lấy danh sách người dùng từ sessionStorage
      // let users = JSON.parse(sessionStorage.getItem('users')) || [];
      let users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Thêm người dùng mới vào mảng
      users.push(userData);
      
      // Lưu trữ lại mảng vào sessionStorage
      // sessionStorage.setItem('users', JSON.stringify(users));
      // sessionStorage.setItem('id_user', newIdUser.toString());
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('id_user', newIdUser.toString());

      navigate('/');
    } else {
      alert('Vui lòng xác minh reCAPTCHA');
    }
    setSubmitting(false);
  };

  useEffect(() => {
    // const data = JSON.parse(sessionStorage.getItem('users'));
    const data = JSON.parse(localStorage.getItem('users'));
    console.log('userData in SignIn:', data);
  }, []);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setGender('Nam');
    } else {
      setGender('Nữ');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className='container p-4' style={{
        border: "1px solid #959CA9",
        borderRadius: "5px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <div className='row'>
          <div className='col-lg-6 col-md-12 px-5'>
            <Formik
              initialValues={initialValues}
              validationSchema={SigninSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <Form>
                  <h1>Đăng ký</h1>
                  <h6
                    className='fw-normal'
                    style={{ color: "#959CA9" }}
                  >Đăng ký tài khoản của bạn</h6>

                  <div className='mt-5'>
                    <Field type="email" name="email" placeholder="Email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" style={{ color: "red" }} />

                    <Field type="password" name="password" placeholder="Mật khẩu" className="form-control mt-2" />
                    <ErrorMessage name="password" component="div" className="error-message" style={{ color: "red" }} />

                    <Field type="text" name="fullname" placeholder="Họ và tên" className="form-control mt-2" />
                    <ErrorMessage name="fullname" component="div" className="error-message" style={{ color: "red" }} />

                    <Field type="text" name="address" placeholder="Địa chỉ" className="form-control mt-2" maxLength="20" />
                    <ErrorMessage name="address" component="div" className="error-message" style={{ color: "red" }} />

                    <Field type="number" name="age" placeholder="Tuổi" className="form-control mt-2" min="1" max="100" />
                    <ErrorMessage name="age" component="div" className="error-message" style={{ color: "red" }} />

                    <label className='d-flex align-items-center'>
                      <h6 className='mx-3'
                        style={{
                          marginTop: "15px"
                        }}
                      >Giới tính: </h6>
                      <input
                        type="checkbox"
                        name="gender"
                        value="male"
                        className='mt-2'
                        defaultChecked
                        onChange={handleCheckboxChange}
                      />
                      <span className='mt-2 mx-2'>{gender}</span>
                    </label>
                  </div>

                  <div className='d-flex justify-content-center align-items-center mt-4'>
                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={(token) => setFieldValue('recaptchaToken', token)} />
                  </div>

                  <div className='d-flex justify-content-center align-items-center mt-4'>
                    <button
                      type="submit"
                      className='text-white py-2 px-5 fw-bold'
                      style={{
                        borderRadius: "8px",
                        border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                        background: "var(--Foundation-orange-Normal, #F4841F)",
                        outline: "none",
                        border: "1px solid orange"
                      }}
                      disabled={isSubmitting}
                    >
                      Xác nhận
                    </button> 
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className='col-lg-6 d-none d-lg-block'>
            <img src={logo_sub} alt="logo_sub" className="img-fluid m-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;