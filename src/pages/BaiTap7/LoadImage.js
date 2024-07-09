import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import no_image from "../../assets/images/no_image.jpg";

function LoadImage() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(no_image);
            alert('Vui lòng chọn ảnh đúng định dạng');
        }
    };

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
                        <h1>Upload Image</h1>
                        <h6
                            className='fw-normal mb-4'
                            style={{
                                color: "#959CA9"
                            }}
                        >Choose your image ( *jpg / *png )</h6>

                        <div className='mt-4 mx-2'>
                            <input
                                type='file'
                                accept='.jpg, .jpeg, .png'
                                onChange={handleImageChange}
                            >
                            </input>
                        </div>
                    </div>

                    <div className='col-lg-6 d-none d-lg-block'>
                        {selectedImage && (
                            <img 
                                src={selectedImage} alt="selectedImage" className="img-fluid m-5"
                                style={{ maxWidth: '100%', maxHeight: '200px' }} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadImage;