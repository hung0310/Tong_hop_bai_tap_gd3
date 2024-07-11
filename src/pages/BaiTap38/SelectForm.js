import React, { useState } from 'react';
import { CContainer, CFormSelect, CButton } from '@coreui/react';

const SelectForm = () => {
    
    const [selectedValue, setSelectedValue] = useState('');
    const [isDisabled, setIsDisabled] = useState('true');

    const handleSelect = (e) => {
        const check = e.target.value;
        setSelectedValue(check);
        setIsDisabled(check === '');
    }

    return (
        <CContainer className='d-flex justify-content-center align-items-center p-5'>
            <div className='px-5'>
                <CFormSelect aria-label="Default select example" onChange={handleSelect} value={selectedValue}>
                    <option value=''>Vui lòng chọn 1 sinh viên</option>
                    <option value="1">Sinh vien 1</option>
                    <option value="2">Sinh vien 2</option>
                    <option value="3">Sinh vien 3</option>
                </CFormSelect>
            </div>

            <CButton 
                type="submit" 
                className='text-white py-1 px-4 fw-bold rounded' 
                style={{
                    background: "#F4841F",
                    outline: "none",
                }}
                disabled={isDisabled}
            >
                Select
            </CButton>
        </CContainer>
    );
}

export default SelectForm;