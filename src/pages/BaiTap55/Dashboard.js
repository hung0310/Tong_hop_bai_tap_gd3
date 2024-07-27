import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./Authentication";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";
import { useToast } from "../../hooks/ToastProvider";

const Dashboard = () => {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    navigate("/");
    showSuccess("Đăng xuất thành công!");
    dispatch(logout());
  };

  useEffect(() => {
    const cookieAccessToken = Cookies.get("accessToken");
    if (!cookieAccessToken) {
      showError("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      navigate("/");
    }
  });

  // const checkToken = () => {
  //   const cookieAccessToken = Cookies.get("accessToken");
  //   if (!cookieAccessToken) {
  //     showError("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
  //     navigate("/");
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Running...");
  //     checkToken();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [navigate, showError]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div
        className="container p-4"
        style={{
          border: "1px solid #959CA9",
          borderRadius: "5px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 px-5">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Hello - Tôi là Admin</h1>

              <div className="d-flex justify-content-center align-items-center mt-4 mx-2">
                <button
                  type="submit"
                  className="text-white py-2 px-5 fw-bold"
                  style={{
                    borderRadius: "8px",
                    border:
                      "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                    background: "var(--Foundation-orange-Normal, #F4841F)",
                    outline: "none",
                    border: "1px solid orange",
                  }}
                >
                  Logout
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <img src={logo_sub} alt="logo_sub" className="img-fluid m-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
