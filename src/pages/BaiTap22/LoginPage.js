import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
        setSuccess('Đăng nhập thành công...');
    }  else {
      setError('Sai thông tin, vui lòng nhập lại...');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container fluid>
      <div className='d-flex justify-content-center align-items-center'>
        <Image src={logo} alt="logo" fluid />
      </div>
      <Container className='p-4' style={{
          border: "1px solid #959CA9",
          borderRadius: "5px",
          maxWidth: "1000px",
          margin: "0 auto"
      }}>
        <Row>
          <Col lg={6} md={12} className='px-5'>
            <Form onSubmit={handleSubmit}>
              <h1>Đăng nhập</h1>
              <h6 className='fw-normal' style={{ color: "#959CA9" }}>
                Đăng nhập tài khoản của bạn
              </h6>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <div className='mt-5'>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-2">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
                <Button type="submit" className='text-white py-2 px-5 fw-bold' style={{
                    borderRadius: "8px",
                    background: "#F4841F",
                    outline: "none",
                    border: "1px solid orange"
                }}>
                  Login
                </Button>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-2 mx-2'>
                <h6 className='pt-2'>Bạn chưa có tài khoản?</h6>
                <Link to="/#" className='px-2'>Đăng ký</Link>
              </div>
            </Form>
          </Col>
          <Col lg={6} className='d-none d-lg-block'>
            <Image src={logo_sub} alt="logo_sub" fluid className="m-5" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LoginPage;