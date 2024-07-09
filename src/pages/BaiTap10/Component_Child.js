import React from 'react';
import logo from "../../assets/images/logo.png";
import logo_sub from "../../assets/images/logo_sub_admin.png";

function Component_Child({ count, onIncrement, onDecrement }) {
  return (
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
            <div className='d-flex mb-5'>
              <button
                id="btn1"
                className='text-white py-2 px-4 fw-bold'
                style={{
                  borderRadius: "8px",
                  border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                  background: "var(--Foundation-orange-Normal, #F4841F)",
                  outline: "none"
                }}
                onClick={onIncrement}
              >
                Button 1
              </button>

              <button
                id="btn2"
                className='text-white py-2 px-4 fw-bold mx-4'
                style={{
                  borderRadius: "8px",
                  border: "2px solid var(--foundation-orange-light-hover, #FDEBDD)",
                  background: "var(--Foundation-orange-Normal, #F4841F)",
                  outline: "none"
                }}
                onClick={onDecrement}
              >
                Button 2
              </button>
            </div>
          </div>

          <div className='col-lg-6 d-none d-lg-block'>
            <img src={logo_sub} alt="logo_sub" className="img-fluid m-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_Child;