import React, { useState, useEffect } from 'react';

import {
     CContainer, CForm,
     CButton, CFormInput, CAlert,
     CFormLabel,
} from '@coreui/react';

const EditStudent = ({id}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [success, setSuccess] = useState('');

    const clearMessages = () => {
        setTimeout(() => {
            setSuccess('');
        }, 2000);
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            const student = data.find(student => student.id === parseInt(id));
            if (student) {
                setName(student.name);
                setAge(student.age.toString());
            }
        }
    }, [id]);

    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem('data'));
        const editStudent = data.map(student => {
            if (student.id === parseInt(id)) {
                return {
                    ...student,
                    name: name,
                    age: age,
                }
            }
            return student;
        });

        localStorage.setItem('data', JSON.stringify(editStudent));
        setSuccess('Change info Student Successful!');
        clearMessages();
    };

    return (
        <CContainer className=''>
            <CForm onSubmit={handleSubmit}>
                <h1 className='text-center text-white my-3'>Add Student</h1>
                {success && <CAlert color="success">{success}</CAlert>}
                <div className='my-5'>
                    <div className='mb-3'>
                        <CFormLabel htmlFor='fname' className='text-white'>Name</CFormLabel>
                        <CFormInput
                            type='text'
                            id='fname'
                            placeholder='Enter your name...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-3'>
                        <CFormLabel htmlFor='fage' className='text-white'>Age</CFormLabel>
                        <CFormInput
                            type='number'
                            id='fage'
                            placeholder='Enter your age...'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div className='d-flex justify-content-center align-items-center mt-5 mx-2'>
                        <CButton 
                            type="submit" 
                            className='text-white py-2 px-5 fw-bold' 
                            style={{
                                borderRadius: "8px",
                                background: "#F4841F",
                                outline: "none",
                                border: "1px solid orange"
                            }}
                        >
                            Submit
                        </CButton>
                    </div>

                </div>
            </CForm>
        </CContainer>
    );
}

export default EditStudent;