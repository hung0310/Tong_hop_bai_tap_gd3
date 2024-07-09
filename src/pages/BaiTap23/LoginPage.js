import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';

import logo from "../../assets/images/logo.png";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      if (toast.current) {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Đăng nhập thành công...', life: 3000 });
      }
    } else {
      setEmail('');
      setPassword('');
      if (toast.current) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Sai thông tin, vui lòng nhập lại...', life: 3000 });
      }
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className='d-flex justify-content-center align-items-center'>
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className='d-flex justify-content-center align-items-center p-5'>
        <Card className="my-5 p-5" style={{ border: "1px solid #959CA9", borderRadius: "5px" }}>
          <form onSubmit={handleSubmit} className="p-fluid">
            <h1>Đăng nhập</h1>
            <h6 className='fw-normal' style={{ color: "#959CA9" }}>
              Đăng nhập tài khoản của bạn
            </h6>
            <div className='mt-5'>
              <div className="p-field">
                <span className="p-float-label">
                  <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="email">Email</label>
                </span>
              </div>
              <div className="p-field mt-5">
                <span className="p-float-label">
                  <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label htmlFor="password">Password</label>
                </span>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
              <Button label="Login" type="submit" className="p-button-rounded p-button-success p-py-2 p-px-5" />
            </div>
            <div className='d-flex justify-content-center align-items-center mt-2 mx-2'>
              <h6 className='pt-2'>Bạn chưa có tài khoản?</h6>
              <Link to="/#" className='px-2'>Đăng ký</Link>
            </div>
          </form>
        </Card>
      </div>  
    </div>
  );
}

export default LoginPage;