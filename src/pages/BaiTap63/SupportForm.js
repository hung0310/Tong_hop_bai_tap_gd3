import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from 'react-google-recaptcha';

import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { useToast } from "../../hooks/ToastProvider";
import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";
import { PostComment } from "../../Apis/StudentAPI";

const SupportForm = () => {
  const [textarea, setTextArea] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const { showSuccess, showError, showWarn } = useToast();

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Họ và tên không được để trống"),
    phone: Yup.string() 
      .required("Số điện thoại không được để trống")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải bao gồm 10 chữ số"),
    comment: Yup.string().required("Vui lòng nhập phần nhận xét của bạn")
  });

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (recaptchaToken) {
        try {
          const rsp = await PostComment(
            values.fullname,
            values.phone,
            values.comment
          )
          showSuccess('Gửi thành công!');
        } catch (error) {
          showError(
            "Không thành công! Vui lòng gửi lại!"
          );
          console.error("Error:", error.response || error.message);
        }
      } else {
        showWarn('Vui lòng xác nhận mã CAPTCHA!');
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
              <h1 className="text-center">SUPPORT</h1>
              <Divider />
              <h6
                className="fw-normal text-center"
                style={{
                  color: "#959CA9",
                }}
              >
                SUPPORT
              </h6>

              <div className="mt-5">
                <span className="p-float-label">
                  <InputText
                    id="fullname"
                    name="fullname"
                    className={`w-full mb-3 ${
                      formik.touched.fullname && formik.errors.fullname
                        ? "p-invalid"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="fullname">Họ và tên</label>
                </span>
                {formik.touched.fullname && formik.errors.fullname && (
                  <small className="p-error">{formik.errors.fullname}</small>
                )}

                <span className="p-float-label mt-3">
                  <InputText
                    id="phone"
                    name="phone"
                    className={`w-full mb-3 ${
                      formik.touched.phone && formik.errors.phone
                        ? "p-invalid"
                        : ""
                    }`}
                    placeholder=" "
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="phone">Phone</label>
                </span>
                {formik.touched.phone && formik.errors.phone && (
                  <small className="p-error">{formik.errors.phone}</small>
                )}

                <span className="p-float-label mt-3">
                  <InputTextarea 
                    id="comment"
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full mb-3 ${
                      formik.touched.comment && formik.errors.comment
                        ? "p-invalid"
                        : ""
                    }`}
                  />
                {formik.touched.comment && formik.errors.comment && (
                  <small className="p-error">{formik.errors.comment}</small>
                )}
                  <label htmlFor="description">Vui lòng thêm câu hỏi của bạn vào đây ...</label>
                </span>
              </div>

              <div className='d-flex justify-content-center align-items-center mt-4 mx-2'>
                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleRecaptchaChange}/>    
              </div>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  type="submit"
                  label="GỬI VỀ TÔI"
                  iconPos="right"
                  icon="pi pi-send"
                  className="p-button-raised p-button-orange"
                  style={{
                    borderRadius: "8px",
                  }}
                />
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

export default SupportForm;