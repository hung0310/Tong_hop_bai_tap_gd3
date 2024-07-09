import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

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

function EditUser() {
  const [gender, setGender] = useState('Nam');
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // const usersData = JSON.parse(sessionStorage.getItem('users'));
    const usersData = JSON.parse(localStorage.getItem('users'));
    if (usersData) {
      const user = usersData.find(user => user.id === parseInt(id));
      if (user) {
        setUserData(user);
      }
    }
  }, [id]);

  const handleSubmit = (values, { setSubmitting }) => {
    // const usersData = JSON.parse(sessionStorage.getItem('users'));
    const usersData = JSON.parse(localStorage.getItem('users'));
    const updatedUsers = usersData.map(user => {
      if (user.id === parseInt(id)) {
        return {
          ...user,
          email: values.email,
          password: values.password,
          fullname: values.fullname,
          age: values.age,
          address: values.address,
          gender,
        };
      }
      return user;
    });
    // sessionStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/user-list');
    setSubmitting(false);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setGender('Nam');
    } else {
      setGender('Nữ');
    }
  };

  if (!userData) return null; // Nếu không có dữ liệu người dùng, không render gì hết

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
              initialValues={{
                email: userData.email,
                password: userData.password,
                fullname: userData.fullname,
                age: userData.age,
                address: userData.address,
                gender: userData.gender || 'Nam',
                recaptchaToken: null, // Để làm ví dụ, nhưng có thể bạn sẽ không cần thiết
              }}
              validationSchema={SigninSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <h1>Chỉnh sửa thông tin người dùng</h1>
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
                      <h6 className='mx-3' style={{ marginTop: "15px" }}>Giới tính: </h6>
                      <input
                        type="checkbox"
                        name="gender"
                        value="male"
                        className='mt-2'
                        defaultChecked={gender === 'Nam'}
                        onChange={handleCheckboxChange}
                      />
                      <span className='mt-2 mx-2'>{gender}</span>
                    </label>
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

export default EditUser;