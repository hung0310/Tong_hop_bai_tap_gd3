import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "./DataContext";

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

function Dashboard() { 
  const { state, dispatch } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" }); 
    navigate('/');
  };

  useEffect(() => {
    if (!state.checkLogin) {
      navigate('/');
    }
  }, [state.checkLogin, navigate]);

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
            <form onSubmit={handleSubmit}>
              <h1 className='text-center'>Hello - Tôi là Admin</h1>

              <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
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
                >
                  Logout
                </button>
              </div>
            </form>
          </div>

          <div className='col-lg-6 d-none d-lg-block'>
            <img src={logo_sub} alt="logo_sub" className="img-fluid m-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 