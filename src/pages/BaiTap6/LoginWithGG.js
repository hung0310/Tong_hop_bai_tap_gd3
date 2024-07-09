import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

const clientID = "476408804045-98v4kp143nhq36ofvnp3t827uap2ljas.apps.googleusercontent.com";

function LoginWithGG() {
    const [profile, setProfile] = useState(null);

    const handleSuccess = async (response) => {
        const token = response.credential;
        const decoded = jwtDecode(token);
        console.log("Login SUCCESSFUL: ", decoded);

        // Gọi API Google để lấy thông tin chi tiết
        const userInfo = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`)
            .then(response => response.json());

        setProfile(userInfo);
        console.log("User Profile: ", userInfo);
    };

    const handleFailure = (error) => {
        console.log("Login FAILURE: ", error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <GoogleOAuthProvider clientId={clientID}>
            <div className='container-fluid'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={logo} alt="logo" className="img-fluid" />
                </div>
                <div className='container p-4' style={{
                    border: "1px solid #959CA9",
                    borderRadius: "5px",
                    maxWidth: "900px",
                    margin: "0 auto"
                }}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 px-5'>
                            <form onSubmit={handleSubmit}>
                                <h1>Đăng nhập</h1>
                                <h6
                                    className='fw-normal mb-4'
                                    style={{
                                        color: "#959CA9"
                                    }}
                                >Đăng nhập tài khoản của bạn</h6>

                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    onError={handleFailure}
                                />

                                <div className='mt-4 mx-2'>
                                    <button 
                                        className='text-white py-2 px-5 fw-bold'
                                        style={{
                                            borderRadius: "8px",
                                            border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                                            background: "var(--Foundation-orange-Normal, #F4841F)",
                                            outline: "none",
                                            border: "1px solid orange"
                                        }}
                                    >
                                        Về trang chủ
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
        </GoogleOAuthProvider>
    );
}

export default LoginWithGG;