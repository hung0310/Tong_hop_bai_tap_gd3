import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PostData_Login } from '../../Apis/StudentAPI';
import { useNavigate } from "react-router-dom";
import { login } from "./Authentication";
import { useDispatch } from "react-redux";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { useToast } from "../../hooks/ToastProvider";
import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

const LoginForm = () => {
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username là bắt buộc"),
    password: Yup.string()
      .required("Mật khẩu là bắt buộc")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const accessToken = await PostData_Login(
          values.username,
          values.password
        );
        if (accessToken) {
          showSuccess("Đăng nhập thành công!");
          navigate("/AxiosReact");
          dispatch(login(accessToken));
        }
      } catch (error) {
        showError(
          "Đăng nhập thất bại! Tên đăng nhập hoặc mật khẩu không đúng."
        );
        console.error("Login error:", error.response || error.message);
      }
    },
  });

  return (
    <div className="p-4">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Image src={logo} alt="logo" preview />
      </div>

      <Card className="p-4" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-center">Đăng nhập</h1>
              <Divider />
              <h6
                className="fw-normal text-center"
                style={{
                  color: "#959CA9",
                }}
              >
                Đăng nhập tài khoản của bạn
              </h6>

              <div className="mt-5">
                <span className="p-float-label">
                  <InputText
                    id="username"
                    name="username"
                    className={`w-full mb-3 ${
                      formik.touched.username && formik.errors.username
                        ? "p-invalid"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="username">Username</label>
                </span>
                {formik.touched.username && formik.errors.username && (
                  <small className="p-error">{formik.errors.username}</small>
                )}

                <span className="p-float-label mt-3">
                  <InputText
                    id="password"
                    name="password"
                    type="password"
                    className={`w-full mb-3 ${
                      formik.touched.password && formik.errors.password
                        ? "p-invalid"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="password">Password</label>
                </span>
                {formik.touched.password && formik.errors.password && (
                  <small className="p-error">{formik.errors.password}</small>
                )}
              </div>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  type="submit"
                  label="Đăng nhập"
                  className="p-button-raised p-button-orange"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="d-flex justify-content-center align-items-center mt-2">
                <h6 className="pt-2">Bạn chưa có tài khoản?</h6>
                <Link
                  to="/signin"
                  className="px-2"
                  style={{ color: "var(--foundation-orange, #F4841F)" }}
                >
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <Image src={logo_sub} alt="logo_sub" className="m-5" preview />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
