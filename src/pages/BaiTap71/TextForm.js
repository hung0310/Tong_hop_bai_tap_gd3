import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTextContext } from './TextContext';

function TextForm() {
    const { addText, isDuplicate } = useTextContext();

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        validationSchema: Yup.object({
            text: Yup.string()
            .min(5, "Độ dài ít nhất phải 5 ký tự")
            .required("Không được để trống")
        }),
        onSubmit: (values, { resetForm }) => {
            if(isDuplicate(values.text)) {
                alert('Text đã tồn tại')
            } else {
                addText(values.text);
                resetForm();
            }
        }
    })

    return (
        <div className='d-flex justify-content-center align-align-items-center' style={{ height: '50px' }}>
            <form onSubmit={formik.handleSubmit}>
                <span>Thêm text</span>
                <input
                    className='rounded ml-2'
                    type='text'
                    name='text'
                    onChange={formik.handleChange}
                    value={formik.values.text}
                />
                <button type='submit' className='rounded px-2 ml-2'><span className='fw-bold'>+</span></button>     
                {formik.errors.text ? <div className='mt-1'><span style={{ color: 'red', fontSize: '15px', fontStyle: 'italic' }}>{formik.errors.text}</span></div> : null}            
            </form>
        </div>
    );
}

export default TextForm;