import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Alert,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

const StyledImage = styled('img')({
  width: '100%',
  maxWidth: '300px',
});

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <StyledImage src={logo} alt="logo" />
      </Box>
      <Container
        sx={{
          border: '1px solid #959CA9',
          borderRadius: 1,
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={6} md={12}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" component="h1" gutterBottom>
                Đăng nhập
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Đăng nhập tài khoản của bạn
              </Typography>
              {error && <Alert severity="error">{error}</Alert>}
              {success && <Alert severity="success">{success}</Alert>}
              <Box mt={5}>
                <TextField
                  fullWidth
                  id="formEmail"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  id="formPassword"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  margin="normal"
                />
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "#F4841F",
                    '&:hover': {
                      backgroundColor: "#e5730d",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Typography variant="body1" component="span">
                  Bạn chưa có tài khoản?
                </Typography>
                <Link to="/#" style={{ paddingLeft: '8px' }}>Đăng ký</Link>
              </Box>
            </form>
          </Grid>
          <Grid item lg={6} display={{ xs: 'none', lg: 'block' }}>
            <StyledImage src={logo_sub} alt="logo_sub" style={{ margin: '32px' }} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default LoginPage;