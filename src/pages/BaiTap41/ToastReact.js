import React from 'react';
import { Button } from 'primereact/button';
import { showCustomToast } from '../../utils/utils';

const ToastReact = ({ toast }) => {

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Button className='mx-5' label="Success" onClick={() => showCustomToast(toast, 'success', 'Success', 'This is a success message!')} />
            <Button className='mx-5' label="Info" onClick={() => showCustomToast(toast, 'info', 'Info', 'This is an info message!')} />
            <Button className='mx-5' label="Warning" onClick={() => showCustomToast(toast, 'warning', 'Warning', 'This is a warning message!')} />
            <Button className='mx-5' label="Error" onClick={() => showCustomToast(toast, 'error', 'Error', 'This is an error message!')} />
        </div>
    );
}

export default ToastReact;